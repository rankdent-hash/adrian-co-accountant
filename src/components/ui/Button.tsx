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
  // Gold background + ink text: high contrast, used for primary CTAs.
  primary:
    "bg-gold text-ink hover:bg-gold-light focus-visible:bg-gold-light",
  // Outlined for use on dark (ink/navy) backgrounds.
  secondary:
    "border border-paper/40 text-paper hover:border-gold hover:text-gold",
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
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 ease-soft";
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
