import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Total Back Office Support",
  description: `${site.name}'s total outsourced back office — bookkeeping, accounting, payroll, tax and advisory in one service.`,
};

const industries = [
  "Sole traders",
  "Partnerships",
  "Family businesses",
  "Contractors (CIS)",
  "Restaurants",
  "Solicitors",
  "Property",
  "High-net-worth individuals",
  "Charities",
];

export default function TotalBackOfficeSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Total Back Office Support"
        title="One outsourced team for your entire back office"
        subhead="Merged from the two duplicate back-office pages on the old site — the fuller version, with the tabloid fraud-story list dropped."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Overview" title="What's included" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim overview copy from the archive's TOTAL OFFICE SUPPORT section goes here." />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Key Benefits" title="Why clients choose this" />
            <div className="mt-6">
              <ContentPlaceholder label="Key benefits list from the archive's TOTAL OFFICE SUPPORT section goes here." />
            </div>
          </div>
        </div>

        <div className="container-page mt-16">
          <SectionHeader eyebrow="Our Clients" title="Who we work with" />
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-slate"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
