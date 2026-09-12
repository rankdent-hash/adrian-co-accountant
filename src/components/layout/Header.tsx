"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, site, type NavItem } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/90">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={661}
            height={117}
            priority
            className="h-auto w-[190px] md:w-[260px]"
          />
        </Link>

        <nav aria-label="Primary" ref={menuRef} className="hidden items-center gap-4 2xl:flex">
          {mainNav.map((item) => (
            <NavEntry key={item.href} item={item} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          ))}
        </nav>

        <div className="hidden 2xl:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-gold px-4 py-2.5 text-btn font-semibold text-paper transition-colors duration-200 ease-soft hover:bg-gold-light"
          >
            Book a Free Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="rounded-md p-2 text-ink 2xl:hidden"
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-paper 2xl:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-1 items-center gap-3 rounded-md px-3 py-2.5 text-nav-mobile font-medium text-ink hover:bg-cream"
                  >
                    <Icon name={item.icon} className="h-4 w-4 text-gold" />
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-expanded={mobileSubOpen === item.href}
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() =>
                        setMobileSubOpen((open) => (open === item.href ? null : item.href))
                      }
                      className="p-2.5 text-ink"
                    >
                      <Icon
                        name="chevron-down"
                        className={`h-4 w-4 transition-transform duration-200 ease-soft ${
                          mobileSubOpen === item.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileSubOpen === item.href && (
                  <div className="ml-4 flex flex-col border-l border-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 rounded-md px-3 py-2 text-small text-slate hover:text-gold"
                      >
                        <Icon name={child.icon ?? "arrow-right"} className="h-4 w-4 text-gold" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-btn font-semibold text-paper"
            >
              Book a Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavEntry({
  item,
  openMenu,
  setOpenMenu,
}: {
  item: NavItem;
  openMenu: string | null;
  setOpenMenu: (v: string | null) => void;
}) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="whitespace-nowrap text-nav font-medium text-ink transition-colors hover:text-gold"
      >
        {item.label}
      </Link>
    );
  }

  const isOpen = openMenu === item.href;

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpenMenu(isOpen ? null : item.href)}
        className="flex items-center gap-1 whitespace-nowrap text-nav font-medium text-ink transition-colors hover:text-gold"
      >
        {item.label}
        <Icon
          name="chevron-down"
          className={`h-3.5 w-3.5 transition-transform duration-200 ease-soft ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          role="menu"
          className="absolute left-1/2 top-full mt-3 w-[760px] -translate-x-1/2 rounded-lg border border-line bg-paper p-6 shadow-xl"
        >
          <div className="grid grid-cols-[1fr_260px] gap-8">
            <div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    onClick={() => setOpenMenu(null)}
                    className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-cream"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-navy text-paper">
                      <Icon name={child.icon ?? "arrow-right"} className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink group-hover:text-gold">
                        {child.label}
                      </span>
                      {child.description && (
                        <span className="mt-0.5 block text-xs text-slate">{child.description}</span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 border-t border-line pt-4">
                <Link
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className="text-sm font-semibold text-gold hover:text-gold-light"
                >
                  View all {item.label.toLowerCase()} →
                </Link>
              </div>
            </div>

            {item.megaCta && (
              <div className="flex flex-col justify-between rounded-lg bg-ink p-5">
                <div>
                  <p className="font-display text-base font-normal text-paper">{item.megaCta.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-paper/70">{item.megaCta.body}</p>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpenMenu(null)}
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-paper transition-colors duration-200 ease-soft hover:bg-gold-light"
                >
                  Book a Free Consultation
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
