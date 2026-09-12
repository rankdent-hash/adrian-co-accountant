import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payroll Services",
  description: `Payroll processing and administration from ${site.name}.`,
};

export default function PayrollPage() {
  return (
    <>
      <PageHero eyebrow="Services · Payroll" title="Payroll, handled from start to finish" />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="What we do" title="Payroll Services" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim copy from the archive's PAYROLL section (services) goes here." />
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="How it runs" title="Our Payroll Process" />
            <div className="mt-6">
              <ContentPlaceholder label="Verbatim copy from the archive's PAYROLL section (process) goes here." />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
