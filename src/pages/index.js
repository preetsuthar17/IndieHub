import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
        <hr className="opacity-50" />
        <Resources />
      </section>
    </>
  );
}
