import Image from "next/image";
import type { Photo } from "@/content/site";
import { cn } from "@/lib/cn";

type Tone = "stone" | "deep" | "petrol";

/**
 * Plate colour, caption colour and a very soft light falloff per tone.
 * Choose the tone that contrasts with the section behind the frame.
 * Caption colours are chosen to keep at least 4.5:1 contrast on the plate.
 */
const tones: Record<Tone, { plate: string; text: string; falloff: string }> = {
  stone: {
    plate: "bg-stone",
    text: "text-ink/75",
    falloff: "from-white/20 to-black/[0.05]",
  },
  deep: {
    plate: "bg-stone-deep",
    text: "text-ink/75",
    falloff: "from-white/10 to-black/[0.06]",
  },
  petrol: {
    plate: "bg-petrol-raised",
    text: "text-on-petrol-muted",
    falloff: "from-white/[0.03] to-black/[0.14]",
  },
};

type ImageFrameProps = {
  photo: Photo;
  /**
   * Tailwind aspect-ratio classes, e.g. "aspect-[4/5]" or
   * "aspect-[4/3] lg:aspect-[21/9]". The frame keeps this ratio whether it
   * holds a placeholder or a real photograph.
   */
  ratio: string;
  tone?: Tone;
  /**
   * Where the placeholder note sits. "container" aligns it with the page
   * content grid (use for full-bleed frames); "frame" insets it from the
   * frame's own edge.
   */
  captionAlign?: "frame" | "container";
  /** `sizes` hint for next/image when a real photograph is used. */
  sizes?: string;
  /** Preload the image. Use only for the hero (largest contentful paint). */
  preload?: boolean;
  className?: string;
};

/**
 * A fixed-ratio frame for photography.
 *  - Without `photo.src` it renders a toned plate with a short art-direction
 *    note (hidden from assistive technology, since it carries no content).
 *  - With `photo.src` and `photo.alt` it renders the optimised image, cropped
 *    to fill the frame.
 */
export function ImageFrame({
  photo,
  ratio,
  tone = "stone",
  captionAlign = "frame",
  sizes = "100vw",
  preload,
  className,
}: ImageFrameProps) {
  if (photo.src) {
    return (
      <div className={cn("relative overflow-hidden", tones[tone].plate, ratio, className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      data-tone={tone === "petrol" ? "petrol" : undefined}
      className={cn(
        "plate-grain relative isolate overflow-hidden",
        tones[tone].plate,
        ratio,
        className,
      )}
    >
      {/* Soft photographic falloff so the plate reads as a lit surface. */}
      <div className={cn("absolute inset-0 bg-linear-to-b", tones[tone].falloff)} />
      <div className="absolute inset-x-0 bottom-0 pb-4 sm:pb-5">
        <div
          className={cn(
            captionAlign === "container"
              ? "mx-auto max-w-(--container) px-(--gutter)"
              : "px-4 sm:px-5",
          )}
        >
          <div className={cn("max-w-[36ch] text-caption", tones[tone].text)}>
            <p className="font-medium">Photograph to be supplied</p>
            <p className="mt-0.5">{photo.brief}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
