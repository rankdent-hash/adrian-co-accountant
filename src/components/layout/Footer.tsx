import Link from "next/link";
import { footerNav, site, complianceMarkers } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-paper/70">{site.descriptor}</p>
          <div className="mt-6 space-y-2 text-sm text-paper/70">
            <p className="flex items-start gap-2">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {site.address.full}
            </p>
            <p className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />
              <a href={site.phone.href} className="hover:text-gold">
                {site.phone.display}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Advisory" links={footerNav.advisory} />
      </div>

      <div className="border-t border-paper/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>{complianceMarkers.join(" · ")}</p>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="eyebrow text-gold-light">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-paper/70 hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
