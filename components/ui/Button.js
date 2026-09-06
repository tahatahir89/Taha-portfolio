import Link from "next/link";

const variants = {
  primary:
    "bg-signal text-white shadow-glow-sm hover:bg-signal-bright hover:shadow-glow border border-signal/40",
  secondary:
    "bg-transparent text-ink border border-base-border hover:border-signal/60 hover:text-white",
  ghost: "bg-transparent text-ink-muted hover:text-white",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  children,
  icon: Icon,
  external = false,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-signal-glow ${variants[variant]} ${className}`;

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...externalProps} {...props}>
        {children}
        {Icon ? <Icon size={16} aria-hidden="true" /> : null}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
      {Icon ? <Icon size={16} aria-hidden="true" /> : null}
    </button>
  );
}
