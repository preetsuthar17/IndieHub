import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

import { GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <>
      <section>
        <GoogleTagManager gtmId="GTM-TJH93ZZT" />
        <Hero />
        <Resources />
      </section>
    </>
  );
}
