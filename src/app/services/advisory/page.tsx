import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { advisorySections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advisory Services",
  description: `Business start-up, family business, probate, trusts and CIS advisory from ${site.name}.`,
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Advisory"
        title="Advice for every stage of a business — and beyond"
        subhead="Consolidated from the old advisory-services omnibus page and its thin standalone duplicates."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Advisory topics" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-line pl-4">
              {advisorySections.map((sub) => (
                <li key={sub.id}>
                  <a href={`#${sub.id}`} className="block py-1.5 text-sm text-slate hover:text-gold">
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            {advisorySections.map((sub) => (
              <div key={sub.id} id={sub.id} className="scroll-mt-24 border-t border-line pt-10 first:border-0 first:pt-0">
                <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">{sub.label}</h2>
                <div className="mt-4 max-w-2xl">
                  <ContentPlaceholder
                    label={`Verbatim copy from the archive's ADVISORY SERVICES section — "${sub.label}" — goes here.`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
