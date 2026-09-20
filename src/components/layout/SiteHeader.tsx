import { navigation, quote } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--line) bg-paper">
      <Container className="flex h-(--header-h) items-center justify-between gap-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9 xl:gap-11">
            {navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block py-3 text-[0.9375rem] font-medium underline decoration-transparent decoration-1 underline-offset-[0.45em] transition-colors duration-150 hover:decoration-current motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Wrapper (not a class on the button) hides the CTA below the desktop breakpoint. */}
        <div className="hidden lg:block">
          <ButtonLink href={quote.href}>{quote.label}</ButtonLink>
        </div>

        <MobileNav links={navigation} cta={quote} />
      </Container>
    </header>
  );
}
