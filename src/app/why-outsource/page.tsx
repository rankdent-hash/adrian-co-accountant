import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { Icon, type IconName } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Outsource Your Back Office",
  description: `Why sole traders and SMEs outsource bookkeeping, accounting and payroll to ${site.name}.`,
};

const reasons: { icon: IconName; title: string }[] = [
  { icon: "briefcase", title: "Business Focus" },
  { icon: "piggy-bank", title: "Reduce Employment Costs" },
  { icon: "calculator", title: "Reduce Overheads" },
  { icon: "shield", title: "Confidentiality & Security" },
  { icon: "check", title: "Peace of Mind" },
];

export default function WhyOutsourcePage() {
  return (
    <>
      <PageHero
        eyebrow="Why Outsource"
        title="More than a cost saving — a way of running your business"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-lg border border-line bg-paper p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-paper">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-5 font-sans text-h3-mobile font-semibold text-ink md:text-h3">{reason.title}</h2>
              <div className="mt-3">
                <ContentPlaceholder label={`Verbatim copy from the archive's WHY OUTSOURCE section — "${reason.title}" — goes here.`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
