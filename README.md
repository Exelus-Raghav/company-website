# Company website

Corporate B2B website for a physical-products company that sells ingredients and
raw materials to businesses, with selected products also sold to consumers.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
There is no database, authentication, CMS, payment or backend. The homepage is
fully static.

> **Placeholder site.** No company facts have been supplied yet. Everything in
> `[square brackets]` is a placeholder. Search engines are told not to index the
> site (see "Before launch").

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm ci          # install exact dependencies
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # production build
npm run start   # serve the production build
```

## Where things live

| Path | Purpose |
|---|---|
| `src/content/site.ts` | **All copy, contact details, navigation and image references.** Start here. |
| `src/app/globals.css` | Design tokens (colour, type scale, spacing) in `@theme`, plus base styles. |
| `src/app/layout.tsx` | Fonts, metadata, viewport, skip link, header and footer. |
| `src/app/page.tsx` | Homepage: assembles the sections. |
| `src/components/sections/` | One file per homepage section (layout only, no copy). |
| `src/components/layout/` | Header, mobile menu (the only client component), footer, wordmark. |
| `src/components/ui/` | Container, Section, Copy (placeholder marking), ImageFrame, Button. |
| `src/app/fonts/` | Self-hosted variable fonts and their SIL Open Font Licences. |
| `public/images/` | Put real photography here. |

## Replacing placeholders

1. **Text:** edit the strings in `src/content/site.ts` and remove the brackets.
   The dotted underline that marks placeholders disappears automatically.
2. **Photography:** add the file to `public/images/`, then in `site.ts` replace
   `{ brief: "..." }` with `{ src: "/images/name.jpg", alt: "Describe the image" }`.
   Each frame keeps its aspect ratio; no layout changes are needed. For the hero
   image, the frame already passes `preload`.
3. **Logo:** replace the contents of `src/components/layout/Wordmark.tsx`
   (keep the link and its accessible name) and `src/app/icon.svg`.
4. **Brand colours and fonts:** change the tokens at the top of `globals.css`
   and the fonts in `layout.tsx`. Components use tokens, not raw values.
5. **Quote / contact route:** every "Request a quote" button uses `quote.href`
   in `site.ts`. It currently scrolls to the quote section. Point it at a page,
   form or `mailto:` link when one exists.

## Before launch

- Remove the `robots: { index: false, follow: false }` entry in `src/app/layout.tsx`.
- Replace the placeholder title and description, and add `metadataBase` and an
  Open Graph image.
- Confirm every statement, certification and credential with the company. Do not
  add statistics, customers, partners, awards, capacities or quality claims that
  have not been verified.
- Fonts are the Latin subset only. If copy needs characters outside it (for
  example some names or currency symbols), add the matching `latin-ext` files.
