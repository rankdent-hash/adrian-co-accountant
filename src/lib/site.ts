// Real facts sourced from the build spec (adrianco-website-build-spec.md).
// Do not add stats, claims, or numbers that aren't already here or confirmed
// from the content archive — see README "Content TODOs" for open gaps.

import type { IconName } from "@/components/ui/Icon";

export const site = {
  name: "Adrian & Co",
  legalName: "Adrian & Co — Chartered Certified Accountants",
  descriptor: "Chartered Certified Accountants, Statutory Auditors & Tax Advisers",
  established: 2006,
  address: {
    line1: "1417/1419 London Road",
    line2: "Norbury",
    city: "London",
    postcode: "SW16 4AH",
    full: "1417/1419 London Road, Norbury, London SW16 4AH",
  },
  phone: {
    display: "020 8240 7483",
    href: "tel:+442082407483",
  },
  // TODO(content): confirm this is still the correct inbox before launch —
  // build spec lists it as the assumed default, open item #4.
  email: "info@adrianco.com",
  url: "https://adrianco.uk",
  description:
    "Adrian & Co is a Norbury, South London firm of Chartered Certified Accountants offering bookkeeping, accounting, payroll, tax and advisory services — a total outsourced back office for sole traders, partnerships and SMEs.",
} as const;

export const ctaLine =
  "Reach out to us to schedule your complimentary initial consultation.";

export const trustBarItems = [
  "ACCA Registered",
  `Established ${site.established}`,
  "Norbury, South London",
  "Free Initial Consultation",
  "No Hidden Fees",
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Send us your paperwork",
    // TODO(content): expand from archive once available.
  },
  {
    step: 2,
    title: "We handle everything",
  },
  {
    step: 3,
    title: "You get clear reporting, on time, every time",
  },
] as const;

export type NavChild = {
  label: string;
  href: string;
  icon?: IconName;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: IconName;
  children?: NavChild[];
  megaCta?: { title: string; body: string };
};

export const serviceHubChildren: NavChild[] = [
  { label: "Accounting", href: "/services/accounting", icon: "calculator", description: "Bookkeeping, year-end and management accounts" },
  { label: "Payroll", href: "/services/payroll", icon: "users", description: "End-to-end payroll processing" },
  { label: "Auditing", href: "/services/auditing", icon: "shield", description: "Statutory audits from a registered ACCA firm" },
  { label: "Taxation", href: "/services/tax", icon: "file-text", description: "Corporation tax, self assessment, VAT and planning" },
  { label: "Advisory", href: "/services/advisory", icon: "briefcase", description: "Start-ups, family business, probate, trusts and more" },
  { label: "Workplace Pensions", href: "/services/pensions", icon: "piggy-bank", description: "Auto-enrolment and pension administration" },
];

// About mega-menu — consolidates the pages the real site had scattered
// (and incorrectly nested under "Home") into one coherent grouping.
export const aboutHubChildren: NavChild[] = [
  { label: "About Us", href: "/about", icon: "users", description: "Our story, our approach and accreditations" },
  { label: "Why Outsource", href: "/why-outsource", icon: "piggy-bank", description: "The case for outsourcing your back office" },
  { label: "Total Back Office Support", href: "/total-back-office-support", icon: "calculator", description: "One outsourced team for your whole back office" },
  { label: "Regulatory Compliance", href: "/regulatory-compliance", icon: "shield", description: "HMRC filing, data protection and AML compliance" },
  { label: "FAQs", href: "/faqs", icon: "file-text", description: "Common questions, answered plainly" },
  { label: "Resources", href: "/resources", icon: "briefcase", description: "Guidance and useful information" },
];

// Real menu structure confirmed from adrianco.uk, with the owner's own
// flagged issues fixed rather than ported as-is:
// - About Us / Contact Us were nested under "Home" — now top-level.
// - Accounting sub-services appeared under both "Services" and a separate
//   "Accounting" menu — consolidated into the one Services mega-menu.
// - Two contact pages existed (/contact-us/, /contact/) — the confirmed
//   theme-junk one was already cut (see build spec).
// - Payroll/Auditing/Taxation/Advisory/Pensions were scattered as their
//   own top-level entries — grouped as Services mega-menu columns instead,
//   which avoids a 10-item header that wouldn't fit any reasonable
//   desktop width and matches the consolidated IA already built.
export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    icon: "users",
    children: aboutHubChildren,
    megaCta: {
      title: "Free Initial Consultation",
      body: "Confidential, cost effective and valued service — talk to us about how outsourcing could work for your business.",
    },
  },
  {
    label: "Services",
    href: "/services",
    icon: "briefcase",
    children: serviceHubChildren,
    megaCta: {
      title: "Not sure where to start?",
      body: "It depends what you ask us to do — book a free consultation and we'll work out exactly what your business needs.",
    },
  },
  { label: "Contact", href: "/contact", icon: "mail" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Why Outsource", href: "/why-outsource" },
    { label: "Total Back Office Support", href: "/total-back-office-support" },
    { label: "Regulatory Compliance", href: "/regulatory-compliance" },
    { label: "FAQs", href: "/faqs" },
    { label: "Resources", href: "/resources" },
  ],
  services: serviceHubChildren,
  advisory: [
    { label: "Business Start-up", href: "/services/advisory#business-start-up" },
    { label: "Family Business Advisory", href: "/services/advisory#family-business" },
    { label: "Probate & Will Services", href: "/services/advisory#probate-wills" },
    { label: "Trusts", href: "/services/advisory#trusts" },
    { label: "In-house Training", href: "/services/advisory#in-house-training" },
    { label: "Mortgage / Finance Health Check", href: "/services/advisory#mortgage" },
    { label: "CIS", href: "/services/advisory#cis" },
  ],
} satisfies Record<string, NavChild[]>;

export const accountingSections = [
  { id: "bookkeeping-and-accounting", label: "Bookkeeping & Accounting" },
  { id: "year-end-accounts", label: "Year-End Accounts" },
  { id: "management-accounts", label: "Management Accounts" },
] as const;

export const taxSections = [
  { id: "corporation-tax", label: "Corporation Tax" },
  { id: "self-assessment", label: "Self Assessment" },
  { id: "partnership-returns", label: "Partnership Returns" },
  { id: "vat", label: "VAT Returns" },
  { id: "tax-investigations", label: "Tax Investigation Services" },
  { id: "eis", label: "EIS (Enterprise Investment Scheme)" },
  { id: "other-taxes", label: "Other Taxes & Tax Planning" },
] as const;

export const advisorySections = [
  { id: "business-start-up", label: "Business Start-up" },
  { id: "family-business", label: "Family Business Advisory" },
  { id: "probate-wills", label: "Probate & Will Services" },
  { id: "trusts", label: "Trusts" },
  { id: "in-house-training", label: "In-house Training" },
  { id: "mortgage", label: "Mortgage / Finance Health Check" },
  { id: "cis", label: "CIS (Construction Industry Scheme)" },
] as const;

export const complianceMarkers = [
  "ACCA member firm",
  "Registered with the Information Commissioner's Office (Data Protection Act)",
  "Registered under the Money Laundering Regulations 2009",
] as const;
