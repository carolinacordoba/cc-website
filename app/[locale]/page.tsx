import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";
import Services from "./services/page";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-bg-soft overflow-x-hidden w-full max-w-full">
      <Header locale={locale} />
      <Hero locale={locale} />
      <About locale={locale} />
      <Projects params={params} />
      <Services params={params} />
      <Contact params={params} />
      <Footer />
    </main>
  );
}
