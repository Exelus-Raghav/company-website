"use client";

import { useEffect, useRef, useState } from "react";
import type { Link } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Disclosure menu for screens narrower than the desktop breakpoint.
 * This is the only client component on the page: it toggles one panel,
 * closes on link selection or Escape, and returns focus to its button.
 */
export function MobileNav({ links, cta }: { links: Link[]; cta: Link }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
        className="-mr-3 inline-flex min-h-12 items-center px-3 text-[0.9375rem] font-medium"
      >
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-(--line) bg-paper"
      >
        <nav aria-label="Primary" className="mx-auto max-w-(--container) px-(--gutter) pb-8 pt-2">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-(--line)">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-serif text-[1.75rem] leading-tight tracking-[-0.012em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-6 w-full"
          >
            {cta.label}
          </ButtonLink>
        </nav>
      </div>
    </div>
  );
}
