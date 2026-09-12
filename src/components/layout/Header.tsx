"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav, serviceHubChildren, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
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
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/90">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold text-paper">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} ref={menuRef} className="relative">
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((open) => !open)}
                  className="flex items-center gap-1 text-sm font-medium text-paper/90 transition-colors hover:text-gold"
                >
                  {item.label}
                  <Icon name="chevron-down" className="h-3.5 w-3.5" />
                </button>
                {servicesOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full mt-3 w-[520px] -translate-x-1/2 rounded-lg border border-paper/10 bg-navy p-6 shadow-xl"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {serviceHubChildren.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setServicesOpen(false)}
                          className="rounded-md px-3 py-2 text-sm font-medium text-paper/90 transition-colors hover:bg-navy-soft hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-paper/10 pt-4">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-sm font-semibold text-gold hover:text-gold-light"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-paper/90 transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 ease-soft hover:bg-gold-light"
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
          className="rounded-md p-2 text-paper lg:hidden"
        >
          <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-paper/10 bg-ink lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-paper hover:bg-navy-soft"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col border-l border-paper/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-paper/80 hover:bg-navy-soft hover:text-gold"
                      >
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
              className="mt-3 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink"
            >
              Book a Free Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
