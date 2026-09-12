import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
  description: `How ${site.name} handles HMRC filing, data protection and anti-money-laundering compliance.`,
};

const topics: { icon: IconName; title: string }[] = [
  { icon: "file-text", title: "HMRC Online Filing" },
  { icon: "shield", title: "Data Protection Act & ICO Registration" },
  { icon: "check", title: "Money Laundering Regulations 2009" },
  { icon: "briefcase", title: "Data Backup & Resilience" },
];

export default function RegulatoryCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Compliance"
        title="Compliant by design, not as an afterthought"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic.title} className="flex gap-4 rounded-lg border border-line bg-paper p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy text-paper">
                <Icon name={topic.icon} className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">{topic.title}</h2>
                <div className="mt-2">
                  <ContentPlaceholder label="Verbatim copy from the archive's REGULATORY COMPLIANCE section goes here." />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
