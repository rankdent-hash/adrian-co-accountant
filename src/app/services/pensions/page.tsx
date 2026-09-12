import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Workplace Pensions",
  description: `Auto-enrolment and workplace pension administration from ${site.name}.`,
};

const serviceItems = [
  "Staging Date Options — we advise you about your staging date",
  "Contracts of Employment — advice on any changes needed, and what not to say to employees about 'opting-out'",
  "Staff and Record Keeping — what personal information you need to identify 'eligible workers' and what records to keep",
  "Scheme Audit — whether your existing staff pension scheme complies with auto-enrolment",
  "Pay Periods and Payroll — help setting up your contribution and refund process",
  "Workplace Pension Options — advice on which type of scheme would best suit your business and employees",
  "Scheme Installation — help installing a new workplace pension scheme, including advice to individual employees",
];

export default function PensionsPage() {
  return (
    <>
      <PageHero eyebrow="Services · Workplace Pensions" title="Auto-enrolment, handled properly" />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeader eyebrow="Overview" title="Workplace pension administration" />
            <div className="mt-6 space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                The Government&rsquo;s major initiative to encourage private
                sector workers to provide for their retirement came into
                effect on 1 October 2012, and the legislation affects all UK
                employers. Complying with the new employer duties
                isn&rsquo;t straightforward — the potential fines and
                penalties for non-compliance are substantial and can be
                levied on the firm or on individual directors.
              </p>
              <p>
                Recognising that employers may struggle with the practical
                complexities of this legislation, we have developed our
                Workplace Pensions Service, which aims to ensure employers
                both comply fully with their new duties and can cope with
                the related administration, initially and on an ongoing
                basis. Our comprehensive service covers:
              </p>
              <ul className="space-y-2">
                {serviceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                We offer all employers a free of charge initial consultation
                and an indication of what action will be needed and when.
                For employers and professionals requiring our full
                Workplace Pensions Service, we offer a fixed fee, both for
                our initial and on-going service.
              </p>
              <p>
                At Adrian &amp; Co we are committed to offering our clients
                genuinely independent, fee-based financial advice, with
                access to the whole of market — so you can be certain of
                avoiding the potential conflict of interest associated with
                commission-based financial advice.
              </p>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Your Contact" title="Alicja Chandze" />
            <div className="mt-4 space-y-3 text-sm text-slate">
              <p>
                To arrange a free of charge, no-obligation initial
                consultation with our specialist Workplace Pensions Adviser,
                please call and ask to speak to Alicja Chandze, or email
                her directly.
              </p>
              <p className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />
                <a href={site.phone.href} className="hover:text-gold">
                  {site.phone.display}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-gold" />
                <a href="mailto:alicja@adrianco.com" className="hover:text-gold">
                  alicja@adrianco.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
