import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { hero, quote } from "@/content/site";

/**
 * Composition: a large typographic statement, a quiet row that separates the
 * two audiences from the primary action, then one full-bleed photograph.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-paper text-ink">
      <Container className="pt-12 sm:pt-16 lg:pt-20 3xl:pt-28">
        <h1
          id="hero-title"
          className="max-w-[16ch] font-serif text-display font-light sm:max-w-[18ch] lg:max-w-[20ch]"
        >
          {hero.headline}
        </h1>

        <div className="mt-10 grid gap-y-10 lg:mt-16 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <ul className="border-t border-(--line) lg:col-span-4 lg:self-start">
            {hero.paths.map((path) => (
              <li key={path.href} className="border-b border-(--line)">
                <a
                  href={path.href}
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="text-small text-(color:--muted)">
                    {path.audience}
                  </span>
                  <span className="text-[0.9375rem] font-medium underline decoration-1 underline-offset-[0.3em] group-hover:decoration-2">
                    {path.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="max-w-[46ch] text-lead text-graphite">
              <Copy>{hero.lead}</Copy>
            </p>
            <ButtonLink href={quote.href} className="mt-8">
              {quote.label}
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Full-bleed photograph: 4:3 on phones, 16:9 on tablets, cinematic on desktop. */}
      <div className="hero-reveal mt-14 lg:mt-20">
        <ImageFrame
          photo={hero.photo}
          tone="stone"
          preload
          captionAlign="container"
          sizes="100vw"
          ratio="aspect-[4/3] sm:aspect-video lg:aspect-[21/9] 3xl:aspect-[5/2] max-h-[85svh]"
          className="w-full"
        />
      </div>
    </section>
  );
}
