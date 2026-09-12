import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: `Articles and guidance from ${site.name}.`,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guidance, not a stale software links page"
        subhead="The old Resources page was a ~2015 list of third-party software links. This is its replacement — launching empty until real editorial content is ready."
      />

      <section className="py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <ContentPlaceholder label="Open decision (build spec §5, item 3): whether to launch this as an empty Insights hub, seed it with 1–2 articles drawn from the Self Assessment / VAT guidance already written for the Tax hub, or omit this section entirely for v1. No articles have been written yet." />
        </div>
      </section>
    </>
  );
}
