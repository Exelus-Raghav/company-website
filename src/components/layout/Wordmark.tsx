import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Text wordmark standing in for the company logo.
 * Replace the contents with the real logo (e.g. an <Image>) when available;
 * keep the surrounding link and its accessible name.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, home`}
      className={cn(
        "inline-block py-3 font-serif text-[1.375rem] font-medium leading-none tracking-[-0.01em]",
        className,
      )}
    >
      {site.name}
    </Link>
  );
}
