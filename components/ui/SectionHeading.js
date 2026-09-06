export default function SectionHeading({ title, description, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{description}</p>
      ) : null}
    </div>
  );
}
