import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  /** primary: solid petrol (light surfaces). accent: amber (dark surfaces). */
  variant?: "primary" | "accent";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const variants = {
  primary: "bg-petrol text-paper hover:bg-petrol-raised",
  accent: "bg-amber text-ink hover:bg-amber-bright",
};

/** A call-to-action rendered as a link. Square-cornered, 48px minimum height. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  onClick,
  children,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[2px] px-7 py-3 text-[0.9375rem] font-medium tracking-[0.005em] transition-colors duration-200 motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

/** A quiet inline text link. */
export function TextLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "font-medium underline decoration-1 underline-offset-[0.3em] transition-[text-decoration-thickness] duration-150 hover:decoration-2 motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </a>
  );
}
