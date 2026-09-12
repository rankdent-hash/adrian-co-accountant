import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceGrid, type ServiceItem } from "@/components/sections/ServiceGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Accounting, payroll, auditing, tax and advisory services from ${site.name}.`,
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

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a growing business needs from its accountants"
        subhead="It depends what you ask us to do — every one of these can be taken on its own or as part of a total back office."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <ServiceGrid items={services} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
