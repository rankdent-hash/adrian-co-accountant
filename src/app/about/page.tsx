import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { complianceMarkers, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — Chartered Certified Accountants established in ${site.established}, based in Norbury, South London.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Established 2006, ACCA registered, based in Norbury"
        subhead="Merged from the old About Us, Why We're Different and Our Background pages into one story."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <div>
            <SectionHeader eyebrow="01" title="Our Story" />
            <div className="mt-6 space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                Adrian &amp; Co was established in 2006 to provide a range of
                Accounting, Tax and Advisory services for individuals and
                businesses of all sizes.
              </p>
              <p>
                We provide a complete outsourced bookkeeping, accounting and
                payroll service with total office support. It&rsquo;s just
                like having your own accounts office next door.
              </p>
              <p>
                Our clients are businesses of all sizes from a diverse range
                of business sectors — from sole traders that simply need
                annual Self Assessment, to larger companies that want to
                benefit from the substantial savings and efficiencies that
                outsourcing can deliver.
              </p>
              <p>
                Whether you are a small business owner looking to work
                smarter, a company that wants to focus on what you do best,
                or a growing business that wants to improve efficiency and
                reduce costs, we will support the way you want to work and
                save you time and money.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="02" title="Our Approach" />
            <div className="mt-6 space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                Adrian &amp; Co for Individuals &amp; Business was formed
                because we knew there was a better way to deliver an
                accounting, bookkeeping, tax and advisory service.
              </p>
              <p>
                Our approach has been driven by the simple principle that to
                be successful in business you need to stick to the skills
                you have and focus entirely on the purpose of your business.
                Anything that is not directly part of your business purpose,
                or within your skills, is better outsourced — and
                that&rsquo;s especially true of day-to-day bookkeeping and
                accounting.
              </p>
              <p>
                Our management team has extensive direct experience of
                business ownership. We have run businesses ourselves as sole
                proprietors, partnerships and limited companies, and have
                direct experience of being on the client side of
                accountancy, bookkeeping, tax and advisory services.
              </p>
              <p>
                We&rsquo;ve been doing it successfully for over 10 years now,
                and our clients like what we do. We&rsquo;re confident you
                will too.
              </p>
              <p>
                Our Payroll Service is run in-house using industry-leading
                software. All of our software is hosted in-house on our own
                servers and backed up automatically overnight — we do not
                use any on-line hosted software for our &lsquo;mission
                critical&rsquo; operations.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="03" title="Accreditations" />
            <ul className="mt-6 space-y-3">
              {complianceMarkers.map((marker) => (
                <li key={marker} className="flex items-start gap-2 text-sm text-slate">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {marker}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
