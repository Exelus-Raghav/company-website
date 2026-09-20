import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Section } from "@/components/ui/Section";
import { products, quote, sectionIds } from "@/content/site";

type Category = (typeof products.categories)[number];

function CategoryMeta({ category }: { category: Category }) {
  return (
    <>
      <p className="max-w-[44ch] text-graphite">
        <Copy>{category.description}</Copy>
      </p>
      <dl className="mt-6 flex flex-wrap gap-x-4 text-small">
        <dt className="font-medium text-(color:--muted)">Used in</dt>
        <dd>
          <Copy>{category.usedIn}</Copy>
        </dd>
      </dl>
    </>
  );
}

/**
 * Composition: the heading and call to action stay in view on the left while
 * the category index scrolls on the right. The first category is given a
 * larger, featured treatment; the rest are compact rows. This is an index,
 * not a grid of cards.
 */
export function Products() {
  const [featured, ...rest] = products.categories;

  return (
    <Section
      id={sectionIds.products}
      labelledBy="products-title"
      className="border-t border-(--line)"
    >
      <Container>
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)]">
              <h2 id="products-title" className="font-serif text-h2">
                {products.title}
              </h2>
              <p className="mt-6 max-w-[28ch] text-lead text-graphite">
                {products.intro}
              </p>
              <ButtonLink href={quote.href} className="mt-10">
                {quote.label}
              </ButtonLink>
            </div>
          </div>

          <ul className="lg:col-span-8">
            <li className="pb-10 lg:pb-14">
              <ImageFrame
                photo={featured.photo}
                tone={featured.tone}
                ratio="aspect-[4/3] lg:aspect-[16/10]"
                sizes="(min-width: 1024px) 64vw, 100vw"
              />
              <article className="mt-6 grid gap-y-3 md:grid-cols-12 md:gap-x-(--gutter)">
                <h3 className="font-serif text-h3 md:col-span-5">
                  <Copy>{featured.name}</Copy>
                </h3>
                <div className="md:col-span-7">
                  <CategoryMeta category={featured} />
                </div>
              </article>
            </li>

            {rest.map((category) => (
              <li
                key={category.name}
                className="grid gap-6 border-t border-(--line) py-8 md:grid-cols-12 md:gap-x-(--gutter) lg:py-10"
              >
                <ImageFrame
                  photo={category.photo}
                  tone={category.tone}
                  ratio="aspect-[4/3]"
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 100vw"
                  className="md:col-span-5"
                />
                <article className="md:col-span-7">
                  <h3 className="font-serif text-h3">
                    <Copy>{category.name}</Copy>
                  </h3>
                  <div className="mt-3">
                    <CategoryMeta category={category} />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
