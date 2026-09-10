/**
 * A single isometric jewellery piece — a shaded isometric cube (three
 * visible faces) with a small emblem on its top face, slowly tumbling in
 * 3D and floating via the `.iso-piece`/`.iso-scene` classes in
 * globals.css. Purely decorative (aria-hidden).
 */

type Variant = "ring" | "gem" | "pendant";

const FACES: Record<Variant, { top: string; left: string; right: string }> = {
  ring: { top: "var(--color-brand-gold-shine)", left: "var(--color-brand-gold-dark)", right: "var(--color-brand-gold)" },
  gem: { top: "#3fae87", left: "var(--color-jewel-emerald)", right: "#166349" },
  pendant: { top: "#d1567e", left: "var(--color-jewel-ruby)", right: "#7c1836" },
};

function Emblem({ variant }: { variant: Variant }) {
  if (variant === "ring") {
    return (
      <g>
        <circle cx="50" cy="35" r="9" fill="none" stroke="var(--color-brand-black)" strokeWidth="2.5" opacity="0.55" />
        <polygon points="50,20 57,27 50,34 43,27" fill="var(--color-brand-gold-shine)" stroke="var(--color-brand-black)" strokeWidth="1" opacity="0.85" />
      </g>
    );
  }
  if (variant === "gem") {
    return (
      <g opacity="0.9">
        <polygon points="38,24 62,24 50,32 " fill="#eafff5" />
        <polygon points="38,24 50,32 46,44 33,31" fill="#bdeeda" />
        <polygon points="62,24 50,32 54,44 67,31" fill="#8fd8bd" />
        <polygon points="46,44 50,32 54,44 50,50" fill="#dffff0" />
      </g>
    );
  }
  return (
    <g opacity="0.9">
      <circle cx="50" cy="20" r="3" fill="none" stroke="var(--color-brand-gold-shine)" strokeWidth="2" />
      <ellipse cx="50" cy="35" rx="9" ry="11" fill="#ffe3ec" stroke="var(--color-brand-black)" strokeWidth="1" opacity="0.85" />
    </g>
  );
}

export function IsometricPiece({
  variant,
  delayMs = 0,
  className,
}: {
  variant: Variant;
  delayMs?: number;
  className?: string;
}) {
  const { top, left, right } = FACES[variant];

  return (
    <div className={`iso-scene ${className ?? ""}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="iso-piece size-full drop-shadow-xl"
        style={{ animationDelay: `${delayMs}ms` }}
      >
        <polygon points="14,31 50,50 50,88 14,69" fill={left} />
        <polygon points="86,31 50,50 50,88 86,69" fill={right} />
        <polygon points="50,12 86,31 50,50 14,31" fill={top} />
        <Emblem variant={variant} />
      </svg>
    </div>
  );
}
