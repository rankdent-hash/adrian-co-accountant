import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { taxSections, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Taxation Services",
  description: `Corporation tax, self assessment, VAT and tax planning from ${site.name}.`,
};

export default function TaxPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Taxation"
        title="Tax, made straightforward"
        subhead="A single reference hub covering the tax topics that used to be spread across seven separate pages."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[240px_1fr]">
          <nav aria-label="Tax topics" className="hidden lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-line pl-4">
              {taxSections.map((sub) => (
                <li key={sub.id}>
                  <a href={`#${sub.id}`} className="block py-1.5 text-sm text-slate hover:text-gold">
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16">
            <div id="corporation-tax" className="scroll-mt-24">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Corporation Tax</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  If you are a limited company you have to pay corporation
                  tax. Corporation Tax Returns must be filed with HM Revenue
                  &amp; Customs within 12 months of the year end. Any
                  Corporation Tax due must be paid either within 9 months of
                  the year end, or in certain cases, in quarterly
                  instalments. The starting point for the preparation of the
                  corporation tax return are the statutory year-end
                  accounts, so having accurate bookkeeping procedures and
                  systems is vital.
                </p>
                <p>Looking after companies&rsquo; tax affairs is fundamental to the overall business service we provide. We also give advice on a wide range of business tax matters including:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Preparation of corporation tax computations and returns</li>
                  <li>Corporation tax planning</li>
                  <li>Corporate group structures</li>
                  <li>Business succession planning</li>
                  <li>Revenue &amp; Customs enquiries and investigations</li>
                  <li>R&amp;D tax relief</li>
                  <li>Sales of businesses and business assets</li>
                </ul>
              </div>
            </div>

            <div id="self-assessment" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Self Assessment</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Whether you are a sole trader, a partner or director in a
                  business, or a self-employed sub-contractor, you are
                  required to submit a Self Assessment return each year. For
                  many people it can seem daunting — the deadline is
                  overlooked, and HMRC&rsquo;s penalties automatically
                  arise, until the amount owed is far greater than the
                  original tax.
                </p>
                <p>
                  We&rsquo;ll give you total peace of mind by dealing with
                  your Self Assessment Tax Return each year. We&rsquo;ll ask
                  you for all your receipts and invoices for your expenses
                  and income (clients often bring them in a carrier bag or
                  shoe box), quickly work out your profit or loss and your
                  tax liability, and make sure your return is submitted on
                  time. We&rsquo;re also very good at identifying situations
                  where a tax refund may be due.
                </p>
                <p>
                  Quite often we are asked to deal with previous years that
                  have been overlooked and where penalties have arisen — we
                  are usually able to negotiate a payment plan with HMRC.
                </p>
              </div>
            </div>

            <div id="partnership-returns" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Partnership Returns</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  We provide a full range of services and support for
                  partnerships, so you and your partners can focus on your
                  business knowing we are your accounts department on hand
                  to deal with everything efficiently.
                </p>
                <p>
                  Each year we deal with the Partnership Annual Return (form
                  SA800) — a declaration of each partner&rsquo;s share of
                  profits or losses, filed with HMRC. In addition, we
                  prepare and submit an individual Self Assessment tax
                  return for each partner annually. Partners are responsible
                  for paying their own National Insurance contributions and
                  income tax on their individual share of profits. Where a
                  partner is a limited company, it will face corporation tax
                  on its partnership income.
                </p>
              </div>
            </div>

            <div id="vat" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">VAT Returns</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  If you are VAT registered we will efficiently calculate
                  your VAT and submit your quarterly VAT returns on
                  time — every time. Businesses may be subject to VAT
                  inspection by HMRC, and the process is usually much easier
                  if you have outsourced your bookkeeping and accounting to
                  us — our professional status and independence gives
                  confidence that your affairs have been properly managed.
                </p>
                <p>
                  You have to register and account for VAT once your sales
                  are about to go above the VAT threshold. VAT is a complex
                  tax with a harsh penalty regime, and in many cases requires
                  specialist knowledge, especially in areas such as property
                  development and importing and exporting goods and
                  services.
                </p>
                <p>We can monitor your business, advise you when you need to register, prepare and file your VAT returns, and advise on the most appropriate scheme to use, such as:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Cash accounting scheme</li>
                  <li>Flat rate scheme</li>
                  <li>Margin scheme</li>
                  <li>Annual accounting</li>
                </ul>
              </div>
            </div>

            <div id="tax-investigations" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Tax Investigation Services</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Our Tax team understands that tax investigations can be
                  very stressful and time consuming. Our Tax Investigation
                  Team aims to provide you with specialist advice to
                  minimise the stress and anxiety an HMRC investigation may
                  cause, resolving matters in the most efficient and
                  cost-effective manner while minimising your tax exposure
                  wherever possible.
                </p>
                <p>
                  We specialise in the whole range of tax investigations,
                  from voluntary disclosures and those conducted at local
                  compliance level, right through to cases handled under
                  HMRC&rsquo;s Code of Practice 9 (COP9) Contractual
                  Disclosure Facility. We also provide VAT inspection advice
                  and specialise in VAT fraud cases. If you are subject to a
                  tax investigation by HMRC, please give us a call today.
                </p>
              </div>
            </div>

            <div id="eis" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">EIS (Enterprise Investment Scheme)</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  Raising external investment is something most small
                  business owners contemplate at some point. One solution is
                  raising equity through the government&rsquo;s highly
                  tax-efficient Enterprise Investment Scheme (EIS), which
                  offers investors immediate tax relief on the value of
                  their investment, and the ability to recoup income tax on
                  most of the value if the investment fails.
                </p>
                <p>
                  There are certain conditions that need to be met, but in
                  our experience most small businesses qualify and the
                  approval process is relatively straightforward. We offer
                  fixed-price EIS packages that aim to make the scheme
                  available to all small businesses.
                </p>
              </div>
            </div>

            <div id="other-taxes" className="scroll-mt-24 border-t border-line pt-10">
              <h2 className="font-display text-h2-mobile font-normal text-ink md:text-h2">Other Taxes &amp; Tax Planning</h2>
              <div className="mt-4 max-w-2xl space-y-4 text-body-mobile text-slate md:text-body">
                <p>
                  There are literally thousands of deductions and allowances
                  available that can reduce your tax liability, but unless
                  you get tax advice from an expert you cannot possibly know
                  all of them. If you choose one of our compliance packages,
                  all your tax compliance and most of your tax advice &amp;
                  planning will be taken care of. Careful tax planning means
                  more money is retained by you or in your business, and is
                  an important aspect of wealth creation.
                </p>
                <p>We also provide advice and planning in other areas of taxation, including:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Capital Gains Tax</li>
                  <li>Stamp Duty Land Tax (SDLT)</li>
                  <li>Annual Tax on Enveloped Dwellings (ATED)</li>
                  <li>Inheritance Tax</li>
                  <li>Property taxes</li>
                  <li>Tax-efficient profit extraction (salaries, dividends, pensions, benefits in kind)</li>
                  <li>Income tax &amp; corporation tax mitigation</li>
                </ul>
              </div>
              <div className="mt-4 max-w-2xl">
                <ContentPlaceholder label="The original page went on to quote specific rates, bands and thresholds (Corporation Tax %, personal allowance, SDLT/ATED bands, dividend allowance) dated 2014-2017 — now years out of date. Rather than republish stale tax figures on a live accountancy site, this needs current rates supplied directly by Adrian & Co before publishing." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
