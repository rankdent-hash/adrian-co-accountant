import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Norbury, South London, or book a free initial consultation.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.address.full);

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
            <h2 className="font-display text-h3 font-medium text-ink">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-h3 font-medium text-ink">Visit or call us</h2>
            <ul className="mt-6 space-y-4 text-sm text-slate">
              <li className="flex items-start gap-3">
                <Icon name="map-pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {site.address.full}
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-5 w-5 shrink-0 text-gold" />
                <a href={site.phone.href} className="hover:text-gold">
                  {site.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="h-5 w-5 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-lg border border-line">
              <iframe
                title={`Map showing ${site.name} at ${site.address.full}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
