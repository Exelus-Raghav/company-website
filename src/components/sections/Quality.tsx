import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { Section } from "@/components/ui/Section";
import { quality, sectionIds } from "@/content/site";

/**
 * Credentials are laid out as slots: a mark, a name, and a scope. All of them
 * are placeholders until the company confirms what it holds.
 */
export function Quality() {
  return (
    <Section id={sectionIds.quality} labelledBy="quality-title">
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <div className="lg:col-span-5">
            <h2 id="quality-title" className="max-w-[14ch] font-serif text-h2">
              {quality.title}
            </h2>
            <p className="mt-8 max-w-[38ch] text-lead text-graphite">
              <Copy>{quality.statement}</Copy>
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-x-(--gutter) sm:grid-cols-2">
              {quality.certifications.map((item) => (
                <li key={item.name} className="border-t border-(--line) py-6">
                  <div
                    aria-hidden="true"
                    className="mb-5 h-14 w-24 bg-stone"
                  />
                  <p className="font-serif text-[1.25rem] leading-snug">
                    <Copy>{item.name}</Copy>
                  </p>
                  <p className="mt-1 text-small text-(color:--muted)">
                    <Copy>{item.scope}</Copy>
                  </p>
                </li>
              ))}
            </ul>

            <dl className="mt-10 border-t border-(--line) lg:mt-14">
              {quality.practices.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-x-(--gutter) gap-y-1 border-b border-(--line) py-5 sm:grid-cols-5"
                >
                  <dt className="text-small font-medium text-(color:--muted) sm:col-span-2 sm:pt-1">
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
