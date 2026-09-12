import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { advisorySections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Advisory Services",
  description: `Business start-up, family business, probate, trusts and CIS advisory from ${site.name}.`,
};

const startUpAdvice = [
  "Structure — the most suitable legal structure for your business, whether Sole Trader, Partnership, LLP or Limited Company, including registration with Companies House",
  "Business Plan — drawn up from scratch, or reviewed if you already have one, including cash flow projections and budgets",
  "Finance — advice on the best source of finance and building solid relationships with your bank",
  "HM Revenue & Customs — we complete and check the registration forms for you",
  "Bookkeeping — VAT, payroll, National Insurance contributions and other requirements",
  "Record Keeping & Software — advice on the best accounting software for your business",
];

const probateServices = [
  "Research and assess the value of the deceased's Estate",
  "Prepare Inheritance Tax accounts",
  "Deal with Income and Capital Gains Tax liabilities of the Estate",
  "Gather assets and pay creditors",
  "Advise beneficiaries and executors of the tax implications of selling assets",
  "Prepare tax returns for personal representatives",
  "Provide final Estate accounts",
];

const trustServices = [
  "Estate planning — organising your affairs to minimise the impact of Inheritance Tax on your estate",
  "Establishment and ongoing financial management and compliance, including preparation of accounts and annual self assessment returns",
  "Executorship — administering your legacy and dealing with distributions to beneficiaries",
  "Trustee service — management and oversight of your trust, including winding up arrangements once their purpose is served",
];

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Advisory"
        title="Advice for every stage of a business — and beyond"
        subhead="Consolidated from the old advisory-services omnibus page and its thin standalone duplicates."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Advisory topics" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-line pl-4">
              {advisorySections.map((sub) => (
                <li key={sub.id}>
                  <a href={`#${sub.id}`} className="block py-1.5 text-sm text-slate hover:text-gold">
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            <div id="business-start-up" className="scroll-mt-24">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Business Start-up</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Starting up or growing a business is an exciting and busy
                  time — your focus is on developing sales, recruiting the
                  right people and creating the right infrastructure. Being
                  confronted with the various financial and legal aspects of
                  a business start-up can be daunting, and this is where we
                  come in.
                </p>
                <p>
                  All you have to do is contact us — don&rsquo;t worry if
                  you have little or no knowledge of the financial and legal
                  implications of starting or growing a business, that&rsquo;s
                  our job. We can advise and assist you on:
                </p>
                <ul className="space-y-2">
                  {startUpAdvice.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Near the end of their financial year, many of our clients
                  like us to help them put together a budget for the
                  following year — an excellent way of making sure revenue
                  milestones are achieved and costs are kept under control.
                </p>
              </div>
            </div>

            <div id="family-business" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Family Business Advisory</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  We understand the unique challenges faced by family
                  businesses and, through closely working with them, have
                  helped to address and solve the competing conflicts that
                  often arise between the family and their business.
                </p>
                <p>
                  We have advised family owned businesses and the families
                  behind them for many years — from first-generation
                  businesses with one shareholder to multi-generational
                  businesses with over a hundred shareholders. We act as
                  independent advisers, helping educate the family and
                  siblings throughout succession planning: early planning is
                  critical for a successful transition when introducing the
                  next generation.
                </p>
              </div>
            </div>

            <div id="probate-wills" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Probate &amp; Will Services</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  We provide expert advice to deal with all aspects of the
                  administration of an Estate following someone&rsquo;s
                  death. Probate is essentially a numerical exercise — a
                  balance sheet of the deceased&rsquo;s assets and
                  liabilities on death. As Chartered Certified Accountants,
                  we have extensive experience of accounts, taxation and the
                  administration of an Estate.
                </p>
                <p>As probate accountants, we deal with all aspects of Probate and Estate Administration, including:</p>
                <ul className="space-y-2">
                  {probateServices.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  Our fees are calculated on a time basis dependent on the
                  complexity of the work involved, but capped at 1.5% of the
                  gross value of the Estate (2% for foreign assets) — so you
                  know the absolute maximum the job will cost, and we&rsquo;re
                  incentivised to work efficiently.
                </p>
              </div>
            </div>

            <div id="trusts" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Trusts</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Trusts offer many practical uses — you can use one to
                  ring-fence assets that will pay for your care later in
                  life, or to maintain the financial security of vulnerable
                  people, such as a child with additional health needs or an
                  infirm or elderly relative. Although the rules governing
                  trusts are complex, the concept is relatively
                  straightforward: you place your money or property into the
                  control of a third party, who then manages and controls
                  those assets for the benefit of others.
                </p>
                <p>Our experts have extensive experience in planning, setting up and managing trusts, both onshore and offshore. We can help you with:</p>
                <ul className="space-y-2">
                  {trustServices.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div id="in-house-training" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">In-house Training</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Concerned about keeping your finance/management team
                  up-to-date with the latest developments in accounting and
                  reporting? Our team of expert trainers can complement your
                  own internal development programmes, training individuals
                  or groups through on-line or more traditional classroom
                  methods.
                </p>
                <p>
                  Our training is tailored to suit your needs, delivered by
                  specialist accounting presenters with robust technical
                  skills, and engaging through worked examples and case
                  studies — including web-based training for geographically
                  spread finance teams.
                </p>
              </div>
            </div>

            <div id="mortgage" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Mortgage / Finance Health Check</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  We work with many clients to review and guide them on
                  their options in terms of re-financing and looking for
                  ways to lower their interest costs and charges.
                </p>
              </div>
            </div>

            <div id="cis" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">CIS (Construction Industry Scheme)</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  The Construction Industry Scheme (CIS) sets out the rules
                  for how payments to subcontractors for construction work
                  must be handled by contractors in the construction
                  industry.
                </p>
                <p>
                  For clients in the construction industry, we act as agent
                  and deal with CIS submissions monthly throughout the year,
                  completing the annual submission at year end — you give us
                  the task, and we give you more time. If you are a
                  self-employed sub-contractor, we can also deal with CIS on
                  your behalf to ensure the right deductions have been made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
