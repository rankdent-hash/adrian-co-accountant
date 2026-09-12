import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Auditing",
  description: `Statutory audit services from ${site.name}, ACCA registered auditors.`,
};

const specialistAudits = [
  "Grant audits — for grant recipients who need to establish that funds have been spent in line with the conditions of the grant",
  "Service charge audits — for tenants of leasehold properties who want reassurance that their service charge payments are correctly used",
  "Solicitor Accounts Rules (SAR) audits — for solicitors who hold money on behalf of their clients",
  "Rental audits — for tenants and landlords who need an independent report confirming trading activity",
  "Internal audits — a review of internal procedures and controls for management who want an ongoing check on how things are running",
  "Audit of completion accounts — to determine the value of assets and liabilities of a business at the point of sale or purchase",
];

export default function AuditingPage() {
  return (
    <>
      <PageHero eyebrow="Services · Auditing" title="Statutory audits from a registered ACCA firm" />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-14">
          <div className="max-w-2xl">
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">When You Need an Audit</h2>
            <div className="mt-3 space-y-3 text-sm text-slate">
              <p>
                Many accountancy firms present audits as an &lsquo;added
                value&rsquo; service. But let&rsquo;s be honest — you often
                need an audit because you have no choice. If you are a
                limited company and your turnover or balance sheet is
                greater than the set limits, or the bank or shareholders
                insist, then you require an audit.
              </p>
              <p>
                As auditors, it&rsquo;s our job to help you meet the current
                statutory audit requirements, but we also take the
                opportunity to review your financial and management
                systems — often identifying potential problem areas and
                opportunities to improve your business performance. Like
                all our other services, we operate on a fully fixed-fee
                basis.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">Specialist Audits</h2>
            <p className="mt-3 text-sm text-slate">
              If you need a specific audit or assurance over particular
              areas of your business, we are happy to help. We can provide
              you with:
            </p>
            <ul className="mt-3 space-y-2">
              {specialistAudits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-2xl">
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">Meeting Options</h2>
            <div className="mt-3 space-y-3 text-sm text-slate">
              <p>You can meet with the lead partner of our Audit team to discuss your requirements. You can choose either:</p>
              <p>
                <strong className="text-ink">An initial meeting</strong> — if
                you&rsquo;d like to see if we&rsquo;re a good fit for you.
                We&rsquo;ll meet for an hour so you can tell us what you
                require and we&rsquo;ll explore how we can help. There is no
                obligation to use our services.
              </p>
              <p>
                <strong className="text-ink">A project meeting</strong> — if
                you have an urgent need that can&rsquo;t wait. Before the
                meeting, we&rsquo;ll agree the scope of our work and fee,
                then start straight away. Please arrange a time with our
                Audit Partner by calling {site.phone.display} or emailing{" "}
                {site.email}.
              </p>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">The End Result</h2>
            <div className="mt-3 space-y-3 text-sm text-slate">
              <p>
                When we audit your business, you&rsquo;ll get more than just
                statutory reports. Your audit will have real impact on how
                your business performs — useful information into past
                performance you can use to make improvements, and our
                expert business knowledge to help generate new ideas.
              </p>
              <p>
                You&rsquo;ll also receive an analysis of your business&rsquo;
                strengths and weaknesses — valuable feedback on your key
                systems, controls, susceptibility to fraud, and how to make
                your controls stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
