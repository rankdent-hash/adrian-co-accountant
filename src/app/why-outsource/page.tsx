import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Outsource Your Back Office",
  description: `Why sole traders and SMEs outsource bookkeeping, accounting and payroll to ${site.name}.`,
};

const reasons: { icon: IconName; title: string; points: string[] }[] = [
  {
    icon: "briefcase",
    title: "Business Focus",
    points: [
      "Outsourcing accounting and payroll means that you can focus on your core business activities and skills — and hand over a non-core activity to trained specialists.",
      "You can also focus your employment budget on people who will be directly involved in what your business does, and not on non-core activities.",
    ],
  },
  {
    icon: "piggy-bank",
    title: "Reduce Employment Costs",
    points: [
      "Outsourcing eliminates recruitment costs — advertising, agencies, interviews.",
      "Saves the cost and time of dealing with employee payroll & deductions.",
      "Cuts your Employers' National Insurance contributions.",
      "Saves holiday & temp staff costs to cover absences.",
      "Cuts sick pay & sickness cover, and maternity/paternity leave costs.",
      "Eliminates non-productive employee time and the hidden costs of managing staff — appraisals, discipline, timekeeping.",
      "Eliminates having to deal with employment legislation and liabilities, contracts of employment, etc.",
    ],
  },
  {
    icon: "calculator",
    title: "Reduce Overheads",
    points: [
      "Frees up office desk space and office facilities for better use.",
      "Totally flexible to deal with seasonal variations in workload or sudden changes — no wasted time in quiet periods, or overtime in busy ones.",
      "Eliminates the cost of accounting and payroll software, licences, ongoing support contracts, annual upgrades, IT support and data backup.",
    ],
  },
  {
    icon: "shield",
    title: "Confidentiality & Security",
    points: [
      "Keeps your business affairs confidential, away from directly employed staff.",
      "Eliminates the risk of fraud or theft. One of the biggest recurring business risks is fraud and theft by employees in positions of trust — outsourcing provides secure controls that give you protection.",
    ],
  },
  {
    icon: "check",
    title: "Peace of Mind",
    points: [
      "You gain access to a higher level of skills and professional resources at a lower cost than directly employing someone.",
      "Everything is done on time, every time.",
      "Banks, lenders and HMRC have greater trust in accounts that are prepared and managed independently by a qualified specialist service.",
      "We have the experience to act on your behalf as independent professionals when dealing with HMRC — if you have VAT or tax challenges, we'll be pleased to assist.",
      "We provide Total Back Office Support — nothing is too much trouble.",
    ],
  },
];

export default function WhyOutsourcePage() {
  return (
    <>
      <PageHero
        eyebrow="Why Outsource"
        title="More than a cost saving — a way of running your business"
        subhead="Ask yourself the question 'what business am I in?' … and if it's not bookkeeping, accounting or payroll, then why not outsource to us? You'll save time and money and be able to focus on what your business really does best."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-lg border border-line bg-paper p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-paper">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-sans text-h3-mobile font-semibold text-ink md:text-h3">{reason.title}</h2>
              <ul className="mt-3 space-y-2">
                {reason.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
