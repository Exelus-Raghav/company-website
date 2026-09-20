import { Applications } from "@/components/sections/Applications";
import { Company } from "@/components/sections/Company";
import { Consumers } from "@/components/sections/Consumers";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Products } from "@/components/sections/Products";
import { Quality } from "@/components/sections/Quality";
import { QuoteCta } from "@/components/sections/QuoteCta";

/**
 * Homepage. All copy and image references come from src/content/site.ts;
 * the components below only handle layout.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Products />
      <Applications />
      <Company />
      <Quality />
      <Consumers />
      <QuoteCta />
    </>
  );
}
