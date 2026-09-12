import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion, type FaqCategory } from "@/components/sections/FaqAccordion";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Frequently asked questions about working with ${site.name}.`,
};

// Answers below are verbatim from the content archive. The archive's export
// only captured the FAQ answers, not the original question text (the
// questions likely lived in an accordion element the export didn't reach) —
// so question wording here is inferred from context and needs the client's
// confirmation of exact original phrasing. Two questions that survived
// verbatim in the source text are marked below.
const categories: FaqCategory[] = [
  {
    category: "Getting Started",
    items: [
      {
        question: "Do you only work with clients based near your Norbury office?",
        answer:
          "Not at all. We have clients spanning an area from London to Scotland and have many international clients too. Many of our clients email or post their paperwork to us, and although we talk regularly on the phone and might be geographically close we may only meet once or twice a year. But if we do need to meet, and distance is an issue, we'll come to you.",
      },
      {
        question: "Do we need to meet in person before you start working with us?",
        answer:
          "Normally the answer is yes. We need to meet in order to properly understand your business needs, and to give you the opportunity to evaluate Adrian & Co. It's the foundation of our future relationship, so it's important to meet. However, as with many things in life, there are exceptions, so we'll work out what's best when you contact us.",
      },
      {
        question: "How often do I need to send you my paperwork?",
        answer:
          "Not necessarily on a fixed schedule. Some clients send their paperwork in bulk quarterly so that we can deal with the VAT. Others send copies as soon as it arrives, daily, so that we can keep their accounts up to date all the time. Ideally, we recommend that you send your paperwork to us at least monthly so that you can keep an eye on how your business is doing month by month.",
      },
      {
        question: "Is my business too small for you to take on?",
        answer:
          "No. We deal with businesses of all sizes. If you run a small business with a lower turnover you are probably using most of your time to focus on your business and profit — we'll make things a lot easier for you by dealing with your bookkeeping and end of year accounts. And if your business grows and you need to become VAT registered, we'll deal with that for you too.",
      },
      {
        question: "Can you take over from another accountant partway through the year?",
        answer:
          "Yes. We're very good at picking up the threads of incomplete work and putting everything in order. It may be a bit more involved than the smooth transition we would prefer, but we'll deal with everything efficiently.",
      },
      {
        question: "Will my current accountant cooperate with a handover?",
        answer:
          "Yes, as long as there isn't a dispute over an unpaid fee invoice. It's always much better if the relationship with your current bookkeeper or accountant ends professionally, without any animosity — we can then be assured of full co-operation in the handover.",
      },
    ],
  },
  {
    category: "Fees & Process",
    items: [
      {
        question: "How much work will you want us to do?",
        answer:
          "The only way to properly give you an estimate on the annual costs is to meet and discuss what you would like us to do. We don't charge for an initial meeting — we'll come to you, or if you want to come to us.",
      },
      {
        question: "Will outsourcing really save me money compared to employing someone in-house?",
        answer:
          "Outsourcing will usually save considerably compared with the cost of employing someone either part-time or full-time. It eliminates the hidden costs of holidays and sickness, and you don't have to worry about maternity/paternity leave, payroll and deductions, or providing a desk, computer and accounts software. We take all those worries and costs off your hands and manage everything efficiently for you — and built into our costs we have full data backup to protect your information, saving you even more money.",
      },
      {
        question: "Can you just work from summary figures instead of my actual paperwork?",
        answer:
          "No — that's no way to run an accounting business properly, although some accountants do. We need to see and understand your business in order to give you our best support, and the best way we can do that is by seeing all your paperwork and entering all the data ourselves. We do everything on site, and all your paperwork is held on site, so if you call in at short notice, or you have an unexpected request by HMRC to inspect your files, we have everything to hand, neatly filed.",
      },
      {
        question: "Do I need special accounting software on my own computer?",
        answer:
          "No, not unless you need to see your accounts on your computer. We deal with all the data entry and provide management reports as email files (PDF format) that you can print, so there's no need to worry about the cost of software or having to learn how to use it.",
      },
      {
        question: "Can I view my accounts online if I want to?",
        answer:
          "Yes, it is possible. For most clients it's not necessary to see their accounts on a computer — we provide management reports as email files (PDF format) that can be printed. However, if you do want to view your accounts on your computer we can make the facility available with full security.",
      },
      {
        question: "Can you recommend accounting software for me to use?",
        answer:
          "We generally don't recommend software — this is an area for a specialist who can evaluate your needs, and besides, if you outsource to us you'll probably not need any. But if you really feel you need accounting or invoicing software, we would be happy to discuss your requirements.",
      },
    ],
  },
  {
    category: "Compliance & HMRC",
    items: [
      {
        question: "Are you a qualified, regulated firm?",
        answer: "Yes. Adrian & Co is a member of the Chartered Association of Certified Accountants (ACCA). We hold a current Practising Certificate.",
      },
      {
        question: "Can you help with my Self Assessment tax return?",
        answer:
          "Yes. We deal with annual Self Assessment returns for a number of clients. We'll quickly summarise your income and expenses from the paperwork you bring, and make sure your tax liability is properly stated so that you don't end up paying more than you should. In some cases we have saved clients money by identifying that they had submitted inaccurate previous years' Self Assessment returns.",
      },
      {
        question: "My records are in a mess and I'm behind with HMRC — can you help?",
        answer:
          "Yes. We're very experienced at quickly sorting out complete chaos and putting everything in order — we'll happily take everything out of the shoebox or bin liner, open the brown envelopes, and quickly get your affairs under control. We're also very good at liaising with the VAT office and HMRC generally and negotiating time to put everything in order, dealing with HMRC estimates that aren't a true reflection of the real tax liability. We've helped prevent bankruptcy petitions from HMRC and visits from bailiffs, negotiating time to pay so clients can continue to trade and grow. In many cases time is of the essence, so don't delay — contact us today.",
      },
      {
        question: "Do I need to stop using my existing accountant for other things?",
        answer:
          "No, not necessarily. If you have an accountant who deals with your personal affairs or end-of-year accounts and you're happy with that relationship, then there's no need to change. We offer a broader range of services than your standard accountant, so you may wish to discuss this with us in more detail — it could be more beneficial to you in terms of overall cost.",
      },
    ],
  },
  {
    category: "Who We Work With",
    items: [
      {
        question: "We're a large company with a turnover around £5m. Can you help or are we too big?",
        answer:
          "Yes, we're happy to work with larger companies. When we meet we'll discuss the scope of work you would like us to undertake — it could be part or all of your accounts department and payroll requirements.",
      },
      {
        question: "Can you handle payroll for just one or two employees?",
        answer: "Yes. We'll deal with payroll whatever size your business is. We'll do it far quicker than you can, so we'll save you time as well as money.",
      },
      {
        question: "Can you work from our office instead of yours?",
        answer:
          "No. The benefits we offer and quality of service are based on outsourcing the work for us to process at our offices. If we were to come to you there would be additional costs for travel time, and you would have the costs of accounting software, licences, a computer and desk space — it is far more economic for you to outsource.",
      },
      {
        question: "Can you chase overdue invoices from my customers on my behalf?",
        answer:
          "No, this is one area we don't get involved in. We can confidentially discuss matters with you and suggest how you might deal with an overdue account, but we don't get directly involved. We can, however, provide the facility to directly deal with queries from your customers about their account status and send statements and copy invoices — beyond that, we'll take messages and forward them to you by email.",
      },
      {
        question: "Is it a problem if you already work with a competitor of mine?",
        answer:
          "No, quite the opposite — it's always useful if we have a broad awareness of the business sector you are in. We deal with quite a few businesses in the same business sector, and every client's business is totally confidential; we take care to ensure that confidentiality and trust is properly maintained at the highest professional level at all times.",
      },
      {
        question: "Can I just do my own bookkeeping instead of outsourcing it?",
        answer:
          "It all depends on your business. If you're a sole trader who is not VAT registered and you don't employ anyone, dealing with your own accounts should be fairly straightforward — but whoever deals with your books needs to keep pace with legislation changes and be confident dealing with your Annual Return to HMRC. One mistake could be costly. If you are VAT registered, in the construction industry and have to account for CIS, or you employ someone, it gets much more involved and we recommend you talk to us.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subhead="Real answers from the current site, grouped into four categories."
      />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-2xl">
            <ContentPlaceholder label="Question wording above is inferred from context — the content archive's export only captured the answer text, not the original question text (likely lost from an accordion element the export didn't reach). The answers are verbatim; please confirm or correct the exact original question wording before launch." />
          </div>
          <FaqAccordion categories={categories} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
