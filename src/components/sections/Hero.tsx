import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

type HeroProps = {
  eyebrow: string;
  title: string;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showGraphic?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subhead,
  primaryCta = { label: "Book a Free Consultation", href: "/contact" },
  secondaryCta = { label: `Call ${site.phone.display}`, href: site.phone.href },
  showGraphic = true,
}: HeroProps) {
  return (
    <section className="border-b border-line bg-cream">
      <div className="container-page grid items-center gap-12 py-14 md:py-16 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-balance font-display text-h1-mobile font-normal text-ink md:text-h1">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-body-mobile text-slate md:text-body">{subhead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="ghost">
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {showGraphic && (
          <div className="hidden lg:block" aria-hidden="true">
            <LedgerGraphic />
          </div>
        )}
      </div>
    </section>
  );
}

function LedgerGraphic() {
  return (
    <svg viewBox="0 0 480 360" className="w-full text-navy" fill="none" role="presentation">
      <rect x="0" y="0" width="480" height="360" rx="12" className="fill-navy" />
      {Array.from({ length: 7 }).map((_, row) => (
        <line
          key={row}
          x1="40"
          y1={60 + row * 40}
          x2="440"
          y2={60 + row * 40}
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth={1}
        />
      ))}
      <line x1="150" y1="40" x2="150" y2="320" stroke="currentColor" strokeOpacity={0.15} strokeWidth={1} />
      <line x1="330" y1="40" x2="330" y2="320" stroke="currentColor" strokeOpacity={0.15} strokeWidth={1} />
      {/* Abstract skyline silhouette, gold accent */}
      <g className="text-gold" stroke="currentColor" strokeWidth={2}>
        <path d="M60 300V180h30v-40h20v40h30v120" />
        <path d="M180 300V140h24v160" />
        <path d="M240 300V200h20v-30h18v30h20v100" />
        <path d="M340 300V160h26v140" />
        <path d="M400 300V220h18v80" />
      </g>
      <line x1="40" y1="300" x2="440" y2="300" stroke="currentColor" strokeOpacity={0.3} strokeWidth={1.5} />
    </svg>
  );
}
