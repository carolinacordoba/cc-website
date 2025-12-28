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
          <div className="flex-1 flex-col justify-center">
        <h1 className="font-heading text-[6rem] text-text-primary mb-4">
          {t.about.title}
        </h1>
        <p className="font-body text-base text-text-secondary">
          {t.about.description}
        </p>
        </div>
        {/* Image section */}
        <div className="flex-1 justify-center items-center ">
          <Image src={"/images/phonemockup.png"} alt="Mobile phone with portrait" width={1000} height={1000} />
        </div>
      </section>
    );
  }