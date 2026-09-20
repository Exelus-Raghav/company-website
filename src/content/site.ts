/**
 * Central content file
 * ----------------------------------------------------------------------------
 * Every piece of company-specific copy, contact detail and image reference on
 * the homepage lives here. Components contain layout only.
 *
 * PLACEHOLDER CONVENTION
 *   Text inside [square brackets] is a placeholder. It is rendered with a quiet
 *   dotted underline (see the `[data-placeholder]` rule in globals.css). To
 *   replace it, edit the string and remove the brackets; nothing else changes.
 *
 * IMAGES
 *   Each `photo` is currently a placeholder ({ brief }). To use a real image,
 *   put the file in /public/images and replace the entry with
 *   { src: "/images/example.jpg", alt: "Description of the image" }.
 *   The frame keeps its aspect ratio, so no layout changes are needed.
 *
 * NOTHING HERE IS A COMPANY FACT
 *   The only non-bracketed statements describe the business model given in
 *   PROJECT_CONTEXT.md (ingredients and raw materials sold to businesses,
 *   selected products also sold to consumers). Do not add statistics,
 *   certifications, customers, partners, awards, capacities, markets or
 *   quality claims unless they have been confirmed by the company.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type Photo =
  | { src: string; alt: string; brief?: string }
  | { src?: undefined; alt?: undefined; brief: string };

export type Link = { label: string; href: string };

/* -------------------------------------------------------------------------- */
/* Site-wide                                                                  */
/* -------------------------------------------------------------------------- */

export const site = {
  name: "[Company name]",
  tagline: "Ingredients and raw materials for business",
  description:
    "[Company name] supplies ingredients and raw materials to businesses, with selected products also available to consumers.",
} as const;

/** Section anchors on the homepage. Navigation links are built from these. */
export const sectionIds = {
  products: "products",
  applications: "applications",
  company: "company",
  quality: "quality",
  consumers: "consumers",
  quote: "quote",
} as const;

export const navigation: Link[] = [
  { label: "Products", href: `#${sectionIds.products}` },
  { label: "Applications", href: `#${sectionIds.applications}` },
  { label: "Company", href: `#${sectionIds.company}` },
  { label: "Quality", href: `#${sectionIds.quality}` },
  { label: "Consumers", href: `#${sectionIds.consumers}` },
];

/**
 * The single destination behind every "Request a quote" button.
 * Currently it scrolls to the quote section on this page. When a real route,
 * form page or mailto: link exists, change `href` here and every button follows.
 */
export const quote: Link = {
  label: "Request a quote",
  href: `#${sectionIds.quote}`,
};

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

export const hero = {
  headline: "Ingredients and raw materials for the businesses that make things.",
  lead: "[Company name] supplies [product types] to businesses that use them in their own products. Selected products are also available to consumers.",
  paths: [
    {
      audience: "For businesses",
      label: "Explore products",
      href: `#${sectionIds.products}`,
    },
    {
      audience: "For consumers",
      label: "See consumer products",
      href: `#${sectionIds.consumers}`,
    },
  ],
  photo: {
    brief:
      "Hero photograph. Suggested: a wide, natural-light image of the company's products or people at work.",
  } satisfies Photo,
};

export const introduction = {
  statement:
    "We supply ingredients and raw materials that other businesses turn into their own products, and we offer selected products directly to consumers.",
  rows: [
    { label: "Who we serve", text: "[Customer types]" },
    { label: "What we supply", text: "[Product types]" },
    { label: "Where we work", text: "[Markets and regions]" },
  ],
};

export const products = {
  title: "Products",
  intro: "Ingredients and raw materials, grouped by category.",
  categories: [
    {
      name: "[Product category A]",
      description:
        "[Short description of the category and how customers use it.]",
      usedIn: "[Applications]",
      tone: "stone" as const,
      photo: {
        brief: "Category image. Suggested: the product in raw or packaged form.",
      } satisfies Photo,
    },
    {
      name: "[Product category B]",
      description:
        "[Short description of the category and how customers use it.]",
      usedIn: "[Applications]",
      tone: "deep" as const,
      photo: {
        brief: "Category image. Suggested: the product in raw or packaged form.",
      } satisfies Photo,
    },
    {
      name: "[Product category C]",
      description:
        "[Short description of the category and how customers use it.]",
      usedIn: "[Applications]",
      tone: "stone" as const,
      photo: {
        brief: "Category image. Suggested: the product in raw or packaged form.",
      } satisfies Photo,
    },
    {
      name: "[Product category D]",
      description:
        "[Short description of the category and how customers use it.]",
      usedIn: "[Applications]",
      tone: "deep" as const,
      photo: {
        brief: "Category image. Suggested: the product in raw or packaged form.",
      } satisfies Photo,
    },
  ],
};

export const applications = {
  title: "Applications",
  intro:
    "The industries and end products where our ingredients and raw materials are used.",
  stories: [
    {
      industry: "[Industry A]",
      story:
        "[Application story: the end product, the role the ingredient plays in it, and what the customer needs from it.]",
      products: "[Product categories]",
      photo: {
        brief:
          "Application image. Suggested: the end product or the setting where it is made.",
      } satisfies Photo,
    },
    {
      industry: "[Industry B]",
      story:
        "[Application story: the end product, the role the ingredient plays in it, and what the customer needs from it.]",
      products: "[Product categories]",
      photo: {
        brief:
          "Application image. Suggested: the end product or the setting where it is made.",
      } satisfies Photo,
    },
    {
      industry: "[Industry C]",
      story:
        "[Application story: the end product, the role the ingredient plays in it, and what the customer needs from it.]",
      products: "[Product categories]",
      photo: {
        brief:
          "Application image. Suggested: the end product or the setting where it is made.",
      } satisfies Photo,
    },
  ],
};

export const company = {
  title: "The company behind the products",
  overview:
    "[Company overview: who the company is, how it started and how it works with customers.]",
  capabilities: [
    {
      name: "[Capability A]",
      description: "[Short description of the capability.]",
    },
    {
      name: "[Capability B]",
      description: "[Short description of the capability.]",
    },
    {
      name: "[Capability C]",
      description: "[Short description of the capability.]",
    },
    {
      name: "[Capability D]",
      description: "[Short description of the capability.]",
    },
  ],
  photo: {
    brief:
      "Company image. Suggested: a portrait-format photograph of the team or workplace.",
  } satisfies Photo,
};

export const quality = {
  title: "Quality and certifications",
  statement: "[Statement on the company's approach to quality.]",
  certifications: [
    { name: "[Certification A]", scope: "[Scope and issuing body]" },
    { name: "[Certification B]", scope: "[Scope and issuing body]" },
    { name: "[Certification C]", scope: "[Scope and issuing body]" },
    { name: "[Certification D]", scope: "[Scope and issuing body]" },
  ],
  practices: [
    { label: "Quality process", text: "[Description of the quality process.]" },
    { label: "Documentation", text: "[Documents provided to customers.]" },
  ],
};

export const consumers = {
  title: "Also for consumers",
  body: "Selected products are available directly to consumers.",
  details: [
    {
      label: "Products",
      text: "[Consumer product names and short description.]",
    },
    { label: "Where to buy", text: "[Store or retail channel.]" },
  ],
  photos: [
    {
      brief:
        "Consumer product image. Suggested: a packaged product, photographed on its own.",
    },
    {
      brief:
        "Consumer product image. Suggested: the product in everyday use.",
    },
  ] satisfies Photo[],
};

export const quoteSection = {
  title: "Request a quote",
  body: "Tell us which products you are considering and how you plan to use them.",
  includeTitle: "Helpful to include",
  include: [
    "Product or category",
    "Estimated quantity",
    "Intended application",
    "Delivery location",
    "Timeline",
  ],
  note: "[Quote request route to be connected.]",
};

/** Contact details, shown in the quote section and the footer. */
export const contact = [
  { label: "Sales enquiries", text: "[Email address]" },
  { label: "Phone", text: "[Phone number]" },
  { label: "Address", text: "[Company address]" },
];

export const footer = {
  legal: "© [Year] [Company name]. [Legal entity name].",
  legalLinks: ["[Privacy policy]", "[Terms of use]"],
};
