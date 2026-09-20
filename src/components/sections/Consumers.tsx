import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { consumers, sectionIds } from "@/content/site";

/** A short, lighter section: consumer availability, kept distinct from the B2B story. */
export function Consumers() {
  return (
    <Section id={sectionIds.consumers} labelledBy="consumers-title" tone="stone">
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-12 lg:items-center lg:gap-x-(--gutter)">
          <div className="lg:col-span-5">
            <h2 id="consumers-title" className="max-w-[12ch] font-serif text-h2">
              {consumers.title}
            </h2>
            <p className="mt-8 max-w-[34ch] text-lead text-graphite">
              {consumers.body}
            </p>

            <dl className="mt-12 border-t border-(--line)">
              {consumers.details.map((item) => (
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

          <div className="grid grid-cols-12 items-end gap-4 sm:gap-6 lg:col-span-6 lg:col-start-7">
            <ImageFrame
              photo={consumers.photos[0]}
              tone="deep"
              ratio="aspect-[4/5]"
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="col-span-7"
            />
            <ImageFrame
              photo={consumers.photos[1]}
              tone="deep"
              ratio="aspect-[3/4]"
              sizes="(min-width: 1024px) 22vw, 40vw"
              className="col-span-5"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
