import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workplace Pensions",
  description: `Auto-enrolment and workplace pension administration from ${site.name}.`,
};

export default function PensionsPage() {
  return (
    <>
      <PageHero eyebrow="Services · Workplace Pensions" title="Auto-enrolment, handled properly" />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader eyebrow="Overview" title="Workplace pension administration" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim copy from the archive's WORKPLACE PENSIONS section goes here." />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Your Contact" title="Alicja Chandze" />
            <div className="mt-4">
              <ContentPlaceholder label="Role/title and contact details for Alicja Chandze, as named in the archive's WORKPLACE PENSIONS section, go here." />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
