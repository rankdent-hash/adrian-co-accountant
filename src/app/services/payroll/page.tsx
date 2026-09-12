import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Payroll Services",
  description: `Payroll processing and administration from ${site.name}.`,
};

const serviceItems = [
  "Weekly, fortnightly, 4-weekly or monthly pay runs, or any other period you specify",
  "Comprehensive new starter forms, and P45s for leavers including calculation of final pay entitlement",
  "Flexible data handling — via email or post",
  "Year end P35 forms and P60 certificates, submitted and issued on time",
  "Timely notification of legislation changes — maternity leave, holiday entitlement, national minimum wage and more",
  "Payslips sent in bulk by mail or secure email, or a secure e-payslip for employees",
  "BACS payment reports for salaries and employers' tax/NI payments to HMRC",
  "Calculation and deduction of employee and employer pension contributions",
  "Statutory documents retained securely for 6 years",
];

const processSteps = [
  {
    title: "Step 1: Preparation",
    body: "We start by discussing your requirements and current process. If you're a new employer and not yet registered with HM Revenue & Customs under PAYE, we can deal with this for you and guide you through everything you need to know.",
  },
  {
    title: "Step 2: Documents",
    body: "We send you some simple forms to gather the information we need, along with a schedule of your employees.",
  },
  {
    title: "Step 3: The Pay Run",
    body: "If your employees are on fixed salaries we'll simply confirm any changes before each pay run. If there are usually variations, we'll ask you to return the schedule with details for each employee — hours worked, overtime, deductions, sickness, and so on.",
  },
  {
    title: "Step 4: Ongoing",
    body: "As your Agent, we receive notification direct from HM Revenue & Customs of any changes affecting employees — tax code changes, student loan deductions, national insurance numbers and more — and update employee records accordingly.",
  },
];

export default function PayrollPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Payroll"
        title="Payroll, handled from start to finish"
        subhead="Our payroll bureau service is run in-house and we'll be pleased to help you whether you have just one employee or a large workforce."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="What we do" title="Payroll Services" />
            <ul className="mt-6 space-y-3">
              {serviceItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="How it runs" title="Our Payroll Process" />
            <div className="mt-6 space-y-5">
              {processSteps.map((step) => (
                <div key={step.title}>
                  <h3 className="font-sans text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
