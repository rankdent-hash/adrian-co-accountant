import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export type ServiceItem = {
  icon: IconName;
  title: string;
  description: string;
  href: string;
};

export function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ServiceCard key={item.href} {...item} />
      ))}
    </Reveal>
  );
}

export function ServiceCard({ icon, title, description, href }: ServiceItem) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-line bg-paper p-7 transition-colors duration-200 ease-soft hover:border-gold"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-paper">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-sans text-h3-mobile font-semibold text-ink md:text-h3">{title}</h3>
      <p className="mt-2 text-sm text-slate">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-gold">
        Learn more
        <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-200 ease-soft group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
