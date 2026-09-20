import { Container } from "@/components/ui/Container";
import { Copy } from "@/components/ui/Copy";
import { contact, footer, navigation, quote, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer data-surface="dark" className="bg-petrol-deep text-on-petrol">
      <Container className="pb-8 pt-16 lg:pt-24">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-(--gutter)">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 max-w-[32ch] text-small text-(color:--muted)">
              {site.tagline}, with selected products for consumers.
            </p>
          </div>

          <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-x-(--gutter) lg:col-span-6 lg:col-start-7">
            <nav aria-label="Footer">
              <h2 className="font-sans text-small font-medium">Explore</h2>
              <ul className="mt-3">
                {[...navigation, quote].map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="inline-block py-1.5 text-small text-(color:--muted) underline decoration-transparent underline-offset-[0.3em] transition-colors hover:text-on-petrol hover:decoration-current motion-reduce:transition-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-sans text-small font-medium">Contact</h2>
              <dl className="mt-4 space-y-4 text-small">
                {contact.map((item) => (
                  <div key={item.label}>
                    <dt className="text-(color:--muted)">{item.label}</dt>
                    <dd>
                      <Copy>{item.text}</Copy>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-(--line) pt-6 text-caption text-(color:--muted) sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p>
            <Copy>{footer.legal}</Copy>
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-1">
            {footer.legalLinks.map((item) => (
              <span key={item}>
                <Copy>{item}</Copy>
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
