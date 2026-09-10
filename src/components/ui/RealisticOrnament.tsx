/**
 * A realistic ornament illustration — a necklace, jhumka earring, kundan
 * choker or engraved bangle rendered as detailed line-art with a metallic
 * gold gradient, one per craft technique in CraftShowcase. Floats gently
 * via `.ornament-float` and carries one small `.twinkle` glint where
 * light would catch the piece. Purely decorative (aria-hidden).
 */

type Variant = "temple" | "meenakari" | "kundan" | "nakshi";

function GoldGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="10%" y1="0%" x2="90%" y2="100%">
      <stop offset="0%" style={{ stopColor: "var(--color-brand-gold-shine)" }} />
      <stop offset="55%" style={{ stopColor: "var(--color-brand-gold)" }} />
      <stop offset="100%" style={{ stopColor: "var(--color-brand-gold-dark)" }} />
    </linearGradient>
  );
}

const petalOffsets = [
  [11, 0],
  [5.5, 9.5],
  [-5.5, 9.5],
  [-11, 0],
  [-5.5, -9.5],
  [5.5, -9.5],
] as const;

function Illustration({ variant, gold }: { variant: Variant; gold: string }) {
  if (variant === "temple") {
    return (
      <g strokeLinecap="round">
        <path d="M12 10 C 26 34, 36 44, 44 50" fill="none" stroke={gold} strokeWidth="3" />
        <path d="M88 10 C 74 34, 64 44, 56 50" fill="none" stroke={gold} strokeWidth="3" />
        <polygon points="50,26 43,35 57,35" fill={gold} />
        <path d="M32 52 Q50 30 68 52 L68 72 Q50 84 32 72 Z" fill={gold} stroke="var(--color-brand-gold-dark)" strokeWidth="1" />
        <circle cx="50" cy="62" r="6.5" fill="var(--color-brand-black)" stroke="var(--color-brand-gold-shine)" strokeWidth="1.2" />
        <circle className="twinkle" cx="48" cy="60" r="1.5" fill="#fff" opacity="0.85" />
        <line x1="50" y1="77" x2="50" y2="87" stroke={gold} strokeWidth="2" />
        <circle cx="50" cy="91" r="4" fill={gold} />
      </g>
    );
  }
  if (variant === "meenakari") {
    const fringeX = [34, 42, 50, 58, 66];
    return (
      <g strokeLinecap="round">
        <circle cx="50" cy="14" r="4" fill={gold} stroke="var(--color-brand-gold-dark)" strokeWidth="1" />
        <line x1="50" y1="18" x2="50" y2="30" stroke={gold} strokeWidth="2" />
        <path
          d="M28 30 A22 16 0 0 1 72 30 L72 46 A22 12 0 0 1 28 46 Z"
          fill="var(--color-jewel-ruby)"
          stroke={gold}
          strokeWidth="2"
        />
        <circle cx="40" cy="35" r="2.3" fill="var(--color-jewel-emerald)" />
        <circle cx="50" cy="31" r="2.3" fill="var(--color-brand-gold-shine)" />
        <circle cx="60" cy="35" r="2.3" fill="var(--color-jewel-sapphire)" />
        <circle className="twinkle" cx="45" cy="33" r="1.3" fill="#fff" opacity="0.85" />
        {fringeX.map((x) => (
          <g key={x}>
            <line x1={x} y1="46" x2={x} y2="56" stroke={gold} strokeWidth="1.5" />
            <circle cx={x} cy="60" r="3" fill={gold} />
          </g>
        ))}
      </g>
    );
  }
  if (variant === "kundan") {
    return (
      <g strokeLinecap="round">
        <path d="M14 14 Q50 2 86 14" fill="none" stroke={gold} strokeWidth="2" />
        <line x1="30" y1="14" x2="38" y2="34" stroke={gold} strokeWidth="1.5" />
        <line x1="70" y1="14" x2="62" y2="34" stroke={gold} strokeWidth="1.5" />
        {petalOffsets.map(([dx, dy], index) => (
          <circle key={index} cx={50 + dx} cy={48 + dy} r="6.5" fill="#fdf8ec" stroke="var(--color-brand-gold-dark)" strokeWidth="1" />
        ))}
        <circle cx="50" cy="48" r="7.5" fill="#fdf8ec" stroke="var(--color-brand-gold-dark)" strokeWidth="1.3" />
        <circle cx="50" cy="48" r="2.2" fill="var(--color-brand-black)" />
        <circle className="twinkle" cx="47" cy="45" r="1.4" fill="#fff" opacity="0.9" />
        <line x1="50" y1="58" x2="50" y2="66" stroke={gold} strokeWidth="1.5" />
        <circle cx="42" cy="69" r="3" fill={gold} />
        <circle cx="50" cy="73" r="3.5" fill={gold} />
        <circle cx="58" cy="69" r="3" fill={gold} />
      </g>
    );
  }
  const ticks = Array.from({ length: 12 }, (_, index) => {
    const angle = (index * 30 * Math.PI) / 180;
    const x1 = 50 + 24 * Math.sin(angle);
    const y1 = 60 - 24 * Math.cos(angle);
    const x2 = 50 + 36 * Math.sin(angle);
    const y2 = 60 - 36 * Math.cos(angle);
    return { x1, y1, x2, y2 };
  });
  return (
    <g strokeLinecap="round">
      <circle cx="50" cy="60" r="30" fill="none" stroke={gold} strokeWidth="12" />
      {ticks.map(({ x1, y1, x2, y2 }, index) => (
        <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-brand-gold-dark)" strokeWidth="1.5" opacity="0.55" />
      ))}
      <circle cx="50" cy="30" r="6.5" fill="var(--color-jewel-emerald)" stroke={gold} strokeWidth="1.5" />
      <circle className="twinkle" cx="47.5" cy="28" r="1.3" fill="#fff" opacity="0.85" />
    </g>
  );
}

export function RealisticOrnament({
  variant,
  delayMs = 0,
  className,
}: {
  variant: Variant;
  delayMs?: number;
  className?: string;
}) {
  const gradientId = `ornament-gold-${variant}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 120"
      className={`ornament-float drop-shadow-lg ${className ?? ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <defs>
        <GoldGradient id={gradientId} />
      </defs>
      <Illustration variant={variant} gold={`url(#${gradientId})`} />
    </svg>
  );
}
