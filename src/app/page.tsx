import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid, type ServiceItem } from "@/components/sections/ServiceGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { Button } from "@/components/ui/Button";
import { processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chartered Certified Accountants in Norbury, South London",
  description: site.description,
};

const services: ServiceItem[] = [
  {
    icon: "calculator",
    title: "Accounting",
    description: "Bookkeeping & accounting, year-end accounts and management accounts.",
    href: "/services/accounting",
  },
  {
    icon: "users",
    title: "Payroll",
    description: "End-to-end payroll processing, handled so you don't have to.",
    href: "/services/payroll",
  },
  {
    icon: "shield",
    title: "Auditing",
    description: "Statutory audits carried out by a registered ACCA firm.",
    href: "/services/auditing",
  },
  {
    icon: "file-text",
    title: "Taxation",
    description: "Corporation tax, self assessment, VAT, and tax planning.",
    href: "/services/tax",
  },
  {
    icon: "briefcase",
    title: "Advisory",
    description: "Business start-up, family business, probate, trusts and more.",
    href: "/services/advisory",
  },
  {
    icon: "piggy-bank",
    title: "Workplace Pensions",
    description: "Auto-enrolment and ongoing workplace pension administration.",
    href: "/services/pensions",
  },
];

const advisoryTeasers: ServiceItem[] = [
  {
    icon: "briefcase",
    title: "Business Start-up",
    description: "Guidance on structure, registration and getting the finances right from day one.",
    href: "/services/advisory#business-start-up",
  },
  {
    icon: "users",
    title: "Family Business Advisory",
    description: "Support built around the way family businesses actually run.",
    href: "/services/advisory#family-business",
  },
  {
    icon: "file-text",
    title: "Probate & Will Services",
    description: "Practical help at a difficult time, handled with care.",
    href: "/services/advisory#probate-wills",
  },
  {
    icon: "shield",
    title: "Trusts",
    description: "Setting up and administering trusts correctly.",
    href: "/services/advisory#trusts",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={site.descriptor}
        title="Your own accounts office next door"
        subhead="A confidential, cost effective and valued service — outsourced bookkeeping, accounting, payroll, tax and advisory for sole traders, partnerships and growing SMEs across South London."
      />
      <TrustBar />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Services" title="A total back office, built around you" />
          <div className="mt-10">
            <ServiceGrid items={services} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="How it works" title="Working with us is straightforward" />
          <div className="mt-10">
            <ProcessSteps steps={processSteps.map((s) => ({ step: s.step, title: s.title }))} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="Advisory" title="Beyond the numbers" />
          <div className="mt-10">
            <ServiceGrid items={advisoryTeasers} />
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-page">
          <SectionHeader eyebrow="FAQs" title="Common questions, answered plainly" />
          <div className="mt-8 max-w-2xl">
            <ContentPlaceholder label="The 25 real FAQs from the current site will be grouped here once the content archive is supplied — see the FAQs page." />
          </div>
          <div className="mt-6">
            <Button href="/faqs" variant="ghost">
              Visit the FAQs page
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
