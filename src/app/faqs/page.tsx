import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: `Frequently asked questions about working with ${site.name}.`,
};

const categories = [
  "Getting Started",
  "Fees & Process",
  "Compliance & HMRC",
  "Who We Work With",
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        subhead="The 25 real questions and answers from the current site, grouped into four categories."
      />

      <section className="py-16 md:py-24">
        <div className="container-page space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="eyebrow mb-4">{category}</h2>
              <ContentPlaceholder label={`Real Q&As for "${category}" from the archive's FAQ'S section will populate this category once supplied. Do not invent questions or answers.`} />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
