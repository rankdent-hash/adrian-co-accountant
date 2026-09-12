import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { CopyButton } from "@/components/ui/CopyButton";
import { ContentPlaceholder } from "@/components/ui/ContentPlaceholder";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Norbury, South London, or book a free initial consultation.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        subhead="Reach out to us to schedule your complimentary initial consultation."
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">Visit or call us</h2>
            <ul className="mt-6 space-y-5 text-body-mobile text-slate md:text-body">
              <li className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-1 h-6 w-6 shrink-0 text-gold" />
                {site.address.full}
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-6 w-6 shrink-0 text-gold" />
                <a href={site.phone.href} className="hover:text-gold">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-6 w-6 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
                <CopyButton value={site.email} label="email address" />
              </li>
            </ul>

            <h2 className="mt-12 font-sans text-h3-mobile font-semibold text-ink md:text-h3">Opening Hours</h2>
            <div className="mt-4 max-w-md">
              <ContentPlaceholder label="Opening hours weren't in the content archive or anywhere on the old site — please confirm the real hours before this goes live, rather than us guessing typical office hours." />
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <li key={day} className="flex items-center justify-between gap-6 border-b border-line py-1.5">
                  <span className="flex items-center gap-2">
                    <Icon name="clock" className="h-4 w-4 text-gold" />
                    {day}
                  </span>
                  <span className="text-slate/60">To be confirmed</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-h3-mobile font-semibold text-ink md:text-h3">Find us</h2>
            <div className="mt-6 overflow-hidden rounded-lg border border-line">
              <iframe
                title={`Map showing ${site.name} at ${site.address.full}`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.6808193951188!2d-0.12484962338581655!3d51.408919171791126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606eb5c0b69bd%3A0xcbc1bd278093d0d4!2sAdrian%20%26%20Co!5e0!3m2!1sen!2suk!4v1789232461785!5m2!1sen!2suk"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
