import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { Icon } from "@/components/ui/Icon";
import { complianceMarkers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — Chartered Certified Accountants established in ${site.established}, based in Norbury, South London.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Established 2006, ACCA registered, based in Norbury"
        subhead="Merged from the old About Us, Why We're Different and Our Background pages into one story."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <div>
            <SectionHeader eyebrow="01" title="Our Story" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim copy from the archive's ABOUT US and OUR BACKGROUND sections goes here." />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="02" title="Our Approach" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim copy from the archive's WHY WE'RE DIFFERENT section goes here." />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="03" title="Accreditations" />
            <ul className="mt-6 space-y-3">
              {complianceMarkers.map((marker) => (
                <li key={marker} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {marker}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
