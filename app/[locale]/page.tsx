import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Services from "./services/page";
import Hero from "../components/layout/Hero";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <main className="min-h-screen bg-bg-soft">
      <Hero></Hero>
      {/* Test content to verify fonts and colors work */}
      <div className="p-8">
        <h1 className="font-heading text-5xl text-text-primary mb-4">
          Carolina Cordoba 
        </h1>
        <p className="font-body text-lg text-text-secondary mb-4">
          Libre Baskerville body text - this should be readable and elegant.
        </p>
      </div>
    <About locale={locale} />
    <Projects params={params} />
    <Services params={params} />
    <Contact params={params} />
    </main>
  );
}