import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { applications, sectionIds, type Photo } from "@/content/site";

type Story = { industry: string; story: string; products: string; photo: Photo };

function StoryText({ story }: { story: Story }) {
  return (
    <>
      <h3 className="font-serif text-h3">
        <Copy>{story.industry}</Copy>
      </h3>
      <p className="mt-3 max-w-[44ch] text-graphite">
        <Copy>{story.story}</Copy>
      </p>
      <dl className="mt-5 flex flex-wrap gap-x-4 text-small">
        <dt className="font-medium text-(color:--muted)">Related products</dt>
        <dd>
          <Copy>{story.products}</Copy>
        </dd>
      </dl>
    </>
  );
}

/**
 * Composition: one large lead story, then two smaller stories staggered on the
 * grid. Varied image ratios and offsets keep the rhythm from becoming a grid
 * of identical cards.
 */
export function Applications() {
  const [lead, second, third] = applications.stories;

  return (
    <Section id={sectionIds.applications} labelledBy="applications-title" tone="stone">
      <Container>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <h2
            id="applications-title"
            className="font-serif text-h2 lg:col-span-6"
          >
            {applications.title}
          </h2>
          <p className="max-w-[36ch] text-lead text-graphite lg:col-span-4 lg:col-start-9 lg:pt-3">
            {applications.intro}
          </p>
        </div>

        <article className="mt-14 grid gap-8 lg:mt-24 lg:grid-cols-12 lg:items-end lg:gap-x-(--gutter)">
          <ImageFrame
            photo={lead.photo}
            tone="deep"
            ratio="aspect-[4/3] lg:aspect-[16/10]"
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="lg:col-span-8"
          />
          <div className="lg:col-span-4">
            <StoryText story={lead} />
          </div>
        </article>

        <div className="mt-16 grid gap-16 lg:mt-28 lg:grid-cols-12 lg:gap-x-(--gutter) lg:gap-y-0">
          <article className="lg:col-span-5">
            <ImageFrame
              photo={second.photo}
              tone="deep"
              ratio="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="mt-6">
              <StoryText story={second} />
            </div>
          </article>

          <article className="lg:col-span-5 lg:col-start-8 lg:mt-44">
            <ImageFrame
              photo={third.photo}
              tone="deep"
              ratio="aspect-[4/3] lg:aspect-square"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="mt-6">
              <StoryText story={third} />
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
