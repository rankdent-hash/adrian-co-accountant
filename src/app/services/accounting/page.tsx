import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { accountingSections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting Services",
  description: `Bookkeeping & accounting, year-end accounts and management accounts from ${site.name}.`,
};

export default function AccountingPage() {
  return (
    <>
      <PageHero eyebrow="Services · Accounting" title="Bookkeeping, year-end and management accounts" />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-16">
          {accountingSections.map((sub) => (
            <div key={sub.id} id={sub.id} className="scroll-mt-24 border-t border-line pt-10 first:border-0 first:pt-0">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">{sub.label}</h2>
              <div className="mt-4 max-w-2xl">
                <ContentPlaceholder
                  label={`Verbatim copy from the archive's ${sub.label.toUpperCase()} section goes here.`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
