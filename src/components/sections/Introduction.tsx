import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { introduction } from "@/content/site";

export function Introduction() {
  return (
    <Section id="introduction" labelledBy="introduction-title">
      <Container>
        <h2
          id="introduction-title"
          className="max-w-[26ch] font-serif text-statement lg:max-w-[30ch]"
        >
          {introduction.statement}
        </h2>

        <dl className="mt-14 border-t border-(--line) lg:mt-24">
          {introduction.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-x-(--gutter) gap-y-2 border-b border-(--line) py-6 lg:grid-cols-12 lg:py-8"
            >
              <dt className="text-small font-medium text-(color:--muted) lg:col-span-3 lg:pt-2">
                {row.label}
              </dt>
              <dd className="font-serif text-h3 lg:col-span-9">
                <Copy>{row.text}</Copy>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
