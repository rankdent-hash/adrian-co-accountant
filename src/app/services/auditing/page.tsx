import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Auditing",
  description: `Statutory audit services from ${site.name}, ACCA registered auditors.`,
};

const sections = [
  "When You Need an Audit",
  "Specialist Audits",
  "Meeting Options",
  "The End Result",
];

export default function AuditingPage() {
  return (
    <>
      <PageHero eyebrow="Services · Auditing" title="Statutory audits from a registered ACCA firm" />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-14">
          {sections.map((heading) => (
            <div key={heading} className="max-w-2xl">
              <h2 className="font-display text-h3 font-medium text-ink">{heading}</h2>
              <div className="mt-3">
                <ContentPlaceholder label={`Verbatim copy from the archive's AUDITING section — "${heading}" — goes here.`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
