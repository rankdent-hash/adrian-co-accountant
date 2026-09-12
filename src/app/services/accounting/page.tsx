import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting Services",
  description: `Bookkeeping & accounting, year-end accounts and management accounts from ${site.name}.`,
};

const managementReportItems = [
  "A profit and loss statement showing the current and year-to-date figures",
  "A balance sheet",
  "Aged debtor and creditor ledger lists",
  "Bank reconciliation statements for all bank accounts",
  "A profit & loss forecast",
  "A cash-flow forecast",
];

export default function AccountingPage() {
  return (
    <>
      <PageHero eyebrow="Services · Accounting" title="Bookkeeping, year-end and management accounts" />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-16">
          <div id="bookkeeping-and-accounting" className="scroll-mt-24">
            <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">
              Bookkeeping &amp; Accounting
            </h2>
            <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                Basic bookkeeping is the starting point for most of our
                clients. Often, other services are added on later as needed.
                We provide a bookkeeping service tailored to each
                client&rsquo;s individual needs — we deal with all the
                day-to-day paperwork and leave you with more time to focus
                on your business.
              </p>
              <p>It&rsquo;s a simple 3-step process:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Put all your paperwork into one of our big envelopes every month (or every week if you prefer) and send it to us.</li>
                <li>Focus on your business while we take care of your bookkeeping and accounts efficiently &amp; professionally.</li>
                <li>We&rsquo;ll provide all the reporting information you need, and make sure VAT and everything else is dealt with on time.</li>
              </ol>
              <p>
                We can seamlessly integrate with your current system, start
                from fresh (converting manual books to computerised
                accounts), or simply take a &lsquo;shoe box&rsquo; of
                invoices and transform chaos into order.
              </p>
            </div>
          </div>

          <div id="year-end-accounts" className="scroll-mt-24 border-t border-line pt-10">
            <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">
              Year-End Accounts
            </h2>
            <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                Because we deal with the day-to-day bookkeeping and
                accounting we should have all the information we need at our
                fingertips — so completing your Year End Accounts should be
                straightforward and cost you less.
              </p>
              <p>
                Once we have discussed any final queries with you, we will
                produce your Year End Accounts as soon as possible and file
                on-line with HMRC.
              </p>
              <p>
                We recommend completing Year End Accounts soon after the
                accounting year has come to a close, rather than leaving
                them until just before they are due — the sooner they are
                done, the better. You&rsquo;ll then know how much tax you
                may have to pay months in advance of when it is due.
              </p>
            </div>
          </div>

          <div id="management-accounts" className="scroll-mt-24 border-t border-line pt-10">
            <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">
              Management Accounts
            </h2>
            <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
              <p>
                If you require Management Reports, we can provide them
                monthly or quarterly to suit your business requirements. We
                also provide some clients with a weekly Flash Report to keep
                them aware of the up-to-date position of their business —
                giving four times more opportunities to review performance
                and spot trends as they happen.
              </p>
              <p>Management Reports are tailored to a client&rsquo;s needs and can include:</p>
              <ul className="space-y-2">
                {managementReportItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Management Reports provide a clear view of your business —
                where you may have over or under spent, profit to date, and
                how much profit you will be taxed on. Forecasts based on
                past information will also help strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
