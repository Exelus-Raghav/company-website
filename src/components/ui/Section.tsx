import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "paper" | "stone" | "petrol";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  stone: "bg-stone text-ink",
  petrol: "bg-petrol text-on-petrol",
};

type SectionProps = {
  /** Anchor id, used by in-page navigation. */
  id?: string;
  /** id of the heading that names this section (for assistive technology). */
  labelledBy: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

/**
 * A full-width page section with consistent vertical rhythm. Dark tones set
 * `data-surface="dark"` so muted text, hairlines and focus rings adapt.
 */
export function Section({
  id,
  labelledBy,
  tone = "paper",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-surface={tone === "petrol" ? "dark" : undefined}
      className={cn("py-(--section-y)", tones[tone], className)}
    >
      {children}
    </section>
  );
}
