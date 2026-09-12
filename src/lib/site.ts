// Real facts sourced from the build spec (adrianco-website-build-spec.md).
// Do not add stats, claims, or numbers that aren't already here or confirmed
// from the content archive — see README "Content TODOs" for open gaps.

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
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const serviceHubChildren: NavChild[] = [
  { label: "Accounting", href: "/services/accounting" },
  { label: "Payroll", href: "/services/payroll" },
  { label: "Auditing", href: "/services/auditing" },
  { label: "Taxation", href: "/services/tax" },
  { label: "Advisory", href: "/services/advisory" },
  { label: "Workplace Pensions", href: "/services/pensions" },
];

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Why Outsource", href: "/why-outsource" },
  { label: "Services", href: "/services", children: serviceHubChildren },
  { label: "Total Back Office", href: "/total-back-office-support" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Why Outsource", href: "/why-outsource" },
    { label: "Regulatory Compliance", href: "/regulatory-compliance" },
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
