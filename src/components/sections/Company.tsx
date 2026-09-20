import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { company, sectionIds } from "@/content/site";

/** A deep-toned section: the pacing change that anchors the middle of the page. */
export function Company() {
  return (
    <Section id={sectionIds.company} labelledBy="company-title" tone="petrol">
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <ImageFrame
            photo={company.photo}
            tone="petrol"
            ratio="aspect-[4/3] lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="order-2 lg:order-1 lg:col-span-5"
          />

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <h2 id="company-title" className="max-w-[16ch] font-serif text-h2">
              {company.title}
            </h2>
            <p className="mt-8 max-w-[44ch] text-lead text-(color:--muted)">
              <Copy>{company.overview}</Copy>
            </p>

            <dl className="mt-14 border-t border-(--line) lg:mt-20">
              {company.capabilities.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-x-(--gutter) gap-y-1 border-b border-(--line) py-5 sm:grid-cols-5"
                >
                  <dt className="font-serif text-[1.25rem] sm:col-span-2">
                    <Copy>{item.name}</Copy>
                  </dt>
                  <dd className="text-small text-(color:--muted) sm:col-span-3 sm:pt-1">
                    <Copy>{item.description}</Copy>
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
