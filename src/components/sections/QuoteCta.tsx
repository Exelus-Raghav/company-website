import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { contact, quote, quoteSection, sectionIds } from "@/content/site";

/**
 * The quote / contact destination. It is deliberately a designed placeholder:
 * no form, mailto: or backend is connected yet. To connect it, set the
 * destination in `quote` (src/content/site.ts).
 */
export function QuoteCta() {
  return (
    <Section id={sectionIds.quote} labelledBy="quote-title" tone="petrol">
      <Container>
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <div className="lg:col-span-6">
            <h2
              id="quote-title"
              className="font-serif text-display font-light"
            >
              {quoteSection.title}
            </h2>
            <p className="mt-8 max-w-[34ch] text-lead text-(color:--muted)">
              {quoteSection.body}
            </p>
            <div className="mt-10">
              <ButtonLink href={quote.href} variant="accent">
                {quote.label}
              </ButtonLink>
              <p className="mt-4 text-small text-(color:--muted)">
                <Copy>{quoteSection.note}</Copy>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <h3 className="font-sans text-small font-medium">
              {quoteSection.includeTitle}
            </h3>
            <ul className="mt-4 border-t border-(--line)">
              {quoteSection.include.map((item) => (
                <li key={item} className="border-b border-(--line) py-3.5">
                  {item}
                </li>
              ))}
            </ul>

            <dl className="mt-12 space-y-5">
              {contact.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-x-(--gutter) gap-y-1 sm:grid-cols-5"
                >
                  <dt className="text-small text-(color:--muted) sm:col-span-2">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-3">
                    <Copy>{item.text}</Copy>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
