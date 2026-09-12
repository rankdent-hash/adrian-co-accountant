import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulatory Compliance",
  description: `How ${site.name} handles HMRC filing, data protection and anti-money-laundering compliance.`,
};

const topics: { icon: IconName; title: string; body: string[] }[] = [
  {
    icon: "file-text",
    title: "HMRC Online Filing",
    body: [
      "The Government is gradually making on-line submission to HMRC compulsory instead of paper-based submissions. We are registered with HMRC for on-line submissions.",
      "We are able to submit all statutory returns to HMRC on-line (VAT, Corporation Tax, Self Assessment, Partnership Returns, CIS) — ensuring submissions are received within deadlines, without risk of postal delays or penalties.",
    ],
  },
  {
    icon: "shield",
    title: "Data Protection Act & ICO Registration",
    body: ["We are registered with the Information Commissioner's Office in compliance with the Data Protection Act."],
  },
  {
    icon: "check",
    title: "Money Laundering Regulations 2009",
    body: ["We comply with the Money Laundering Regulations 2009 by being directly registered with HMRC."],
  },
  {
    icon: "briefcase",
    title: "Data Backup & Resilience",
    body: [
      "All data on our computer systems is backed up overnight and stored at a secure remote data store within the UK. In the case of a major disaster, we can restore all data to another location within an hour.",
      "We believe we are one of the few businesses in our field that can offer this level of security to clients, at no additional cost — and your bank and insurers will look favourably on this.",
    ],
  },
];

export default function RegulatoryCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Regulatory Compliance"
        title="Compliant by design, not as an afterthought"
        subhead="In recent years, it has become a legal requirement for all businesses providing accounting, bookkeeping and payroll services to comply with various regulations and register with the supervising bodies. Here's a summary of how we comply."
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
                <div className="mt-2 space-y-2 text-sm text-slate">
                  {topic.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
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
