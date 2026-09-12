import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variantClasses: Record<ButtonVariant, string> = {
  // Red background + white text, darkening on hover, per the brand spec.
  primary:
    "bg-gold text-paper hover:bg-gold-light focus-visible:bg-gold-light",
  // Outlined for use on dark (ink) backgrounds. Hover brightens to white
  // rather than red — red-on-charcoal fails WCAG contrast (~2:1).
  secondary:
    "border border-paper/40 text-paper hover:border-paper hover:text-paper",
  // Plain text on light backgrounds only — red hover is safe here.
  ghost: "text-ink underline underline-offset-4 hover:text-gold",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-btn font-semibold transition-colors duration-200 ease-soft";
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
