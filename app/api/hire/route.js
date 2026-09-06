import { NextResponse } from "next/server";

// Same Resend-based email pipeline as /api/contact — see that file for the
// required environment variables (RESEND_API_KEY, CONTACT_EMAIL, RESEND_FROM).
//
// The "preferredTime" field is a plain text/datetime request, not a real
// booking. To turn this into an actual scheduling flow, swap the fetch call
// for the embed/API of a scheduling service (Cal.com and Calendly both have
// straightforward APIs) and store the confirmed slot instead of a request.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, projectType, details, budget, preferredTime, company } = body || {};

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !details?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and a project description are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (details.length > 5000) {
    return NextResponse.json({ error: "Project description is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    console.error("Hire form: missing RESEND_API_KEY, CONTACT_EMAIL, or RESEND_FROM env vars.");
    return NextResponse.json(
      { error: "Email service isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Project type: ${projectType || "Not specified"}`,
    budget ? `Budget: ${budget}` : null,
    preferredTime ? `Preferred meeting time: ${preferredTime}` : null,
    "",
    "Project details:",
    details,
  ].filter(Boolean);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[Hire Me] ${projectType || "New project"} — ${name}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error("Resend error:", errData);
      return NextResponse.json({ error: "Request couldn't be sent. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Hire form send failed:", err);
    return NextResponse.json({ error: "Request couldn't be sent. Please try again." }, { status: 500 });
  }
}
