import { NextResponse } from "next/server";

// Sends contact form submissions via Resend's HTTP API (https://resend.com).
// No SDK dependency needed — a plain fetch call keeps this lightweight.
//
// Required environment variables (set in .env.local / Vercel project settings):
//   RESEND_API_KEY   — API key from your Resend account
//   CONTACT_EMAIL    — the inbox that should receive messages (e.g. tahacodyou@gmail.com)
//   RESEND_FROM      — a "from" address on a domain you've verified with Resend
//                       (Resend requires this; use their onboarding@resend.dev
//                       sender for testing before you verify a domain)
//
// Swap the fetch call below for any other transactional email provider
// (Postmark, SendGrid, etc.) if you prefer — the validation and response
// shape can stay the same.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, company } = body || {};

  // Honeypot: a real visitor never fills this hidden field in.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    console.error("Contact form: missing RESEND_API_KEY, CONTACT_EMAIL, or RESEND_FROM env vars.");
    return NextResponse.json(
      { error: "Email service isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

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
        subject: subject?.trim() ? `[Portfolio Contact] ${subject}` : "[Portfolio Contact] New message",
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error("Resend error:", errData);
      return NextResponse.json({ error: "Message couldn't be sent. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Message couldn't be sent. Please try again." }, { status: 500 });
  }
}
