import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Total Back Office Support",
  description: `${site.name}'s total outsourced back office — bookkeeping, accounting, payroll, tax and advisory in one service.`,
};

const clientTypes = [
  "Sole Trader",
  "Limited Company",
  "Partnerships",
  "LLP",
  "Charities",
  "Corporations",
  "Contractors",
];

const industries = [
  "Restaurants and service stations",
  "Solicitors and estate agents",
  "High net-worth individuals, UK and overseas",
  "European and off-shore businesses",
  "Building contractors",
  "Franchises",
  "City based businesses and individuals",
  "Travel & leisure businesses",
  "Business start-ups and emerging companies",
  "Property investors and developers",
  "Sole traders and partnerships across all sectors",
];

const benefits = [
  "We know first-hand what it's like to run a business and how important it is to stay focused on what your business does, not distracted by non-profit tasks.",
  "We'll provide you with a complete 'accounts office' and give you the freedom to focus on your business.",
  "Our service is scalable — as you grow, or if your business fluctuates, we'll change with you. You'll only pay for what we do, no fixed costs.",
  "We'll make sure everything is done on time, every time — so no late filing penalties, ever again.",
  "We go that bit further. We do far more than just bookkeeping, accounting and payroll — just ask, and we'll work out a way to say 'yes'.",
];

export default function TotalBackOfficeSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Total Back Office Support"
        title="One outsourced team for your entire back office"
        subhead="Merged from the two duplicate back-office pages on the old site — the fuller version, with the tabloid fraud-story list dropped."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Overview" title="What's included" />
            <div className="mt-6 space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                Total Back Office Support is a key part of what makes us
                different. We&rsquo;ll integrate seamlessly as an extension
                to your business to provide a virtual accounts office,
                readily available whenever you need us.
              </p>
              <p>
                We&rsquo;ll take responsibility for all aspects of your
                bookkeeping and accounting, and we can manage your payroll —
                so you&rsquo;ll be free to focus all your resources on what
                your business does best.
              </p>
              <p>
                If you need to query an invoice, talk about a payment that
                needs to be made, or ask about holiday entitlement for an
                employee, then we&rsquo;re available immediately. Just
                phone, email, or fax us and we&rsquo;ll deal with your query
                straight away.
              </p>
              <p>
                As your own &lsquo;back office&rsquo; we&rsquo;ll provide
                you with total business support, just as if we are part of
                your business.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Key Benefits" title="Why clients choose this" />
            <ul className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-page mt-16">
          <SectionHeader eyebrow="Our Clients" title="Who we work with" />
          <p className="mt-4 max-w-2xl text-sm text-slate">
            Adrian &amp; Co have, over the last 10 years, been able to help a
            very large number of individuals &amp; businesses with their
            accounting, tax and financial affairs — from sole traders to
            organisations transacting cross-border with multi-million pound
            turnover.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {clientTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-line bg-navy px-4 py-2 text-sm font-medium text-paper"
              >
                {type}
              </span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-slate"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
