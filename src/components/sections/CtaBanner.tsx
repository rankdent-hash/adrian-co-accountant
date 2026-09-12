import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ctaLine, site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="bg-ink">
      <Reveal className="container-page flex flex-col items-center gap-6 py-16 text-center lg:py-20">
        {/* Plain paper/white text, not red — red-on-charcoal fails WCAG
            contrast (~2:1). Red stays on the button below instead. */}
        <h2 className="max-w-2xl text-balance font-display text-h2-mobile font-normal text-paper md:text-h2">
          {ctaLine}
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Book a Free Consultation
          </Button>
          <a
            href={site.phone.href}
            className="flex items-center gap-2 text-sm font-medium text-paper/90 hover:text-paper"
          >
            <Icon name="phone" className="h-4 w-4" />
            {site.phone.display}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm font-medium text-paper/90 hover:text-paper"
          >
            <Icon name="mail" className="h-4 w-4" />
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
