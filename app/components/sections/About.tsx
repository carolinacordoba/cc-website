import { getLocaleContent } from "@/app/lib/i18n";
import Image from "next/image";

interface AboutProps {
  locale: string;
}
export default async function About({ locale }: AboutProps) {
  const t = getLocaleContent(locale);

    return (
      <section id="about" className="flex max-w-7xl mx-auto px-6">

          {/* Text section */}
          <div className="flex-3 flex flex-col">
        <h1 className="font-heading text-[7rem] text-text-primary">
          {t.about.title}
        </h1>
        <hr className="top-0 mb-6 border-t w-1/2 border-text-secondary" />
        <p className="font-body text-2xl text-text-primary">
          {t.about.description}
        </p>
        </div>
        {/* Image section */}
        <div className="relative flex-2 h-full items-center">
          <Image src={"/images/phonemockup.png"} alt="Mobile phone with portrait" width={1000} height={1000} quality={90}/>
        </div>
      </section>
    );
  }