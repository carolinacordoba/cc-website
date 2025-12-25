import { getLocaleContent } from "@/app/lib/i18n";
import Image from "next/image";

interface HeroProps {
    locale: string;
}

export default function Hero({ locale }: HeroProps) {
    const t = getLocaleContent(locale);

    return (
        <section id="hero" className="flex min-h-screen w-full h-full justify-center md:items-center overflow-hidden mt-0">

            {/* Background image */}
            <div className="absolute h-full w-full inset-0 z-0 top-0">
                <Image src={"/images/heroimg.jpg"} alt="Workspace" fill priority className="object-cover" quality={90} />
                {/* Overlay */}
                <div className="absolute inset-0 bg-bg-overlay/33"/>
                </div>

                {/* Content - layered on top of background */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 md:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row items-center md:gap-12">
                        <div className="shrink-0">
                            <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden border-6 border-bg-soft shadow-lg">
                            <Image src={"/images/carolina-portratt.jpg"} alt="portrait of Carolina" width={800} height={800} className="object-cover" priority />
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="flex-1 flex-col text-center md:text-left">
                            <h1 className="font-heading text-6xl lg:text-[8rem] leading-none m-0 text-text-light text-shadow">Carolina</h1>
                            <h1 className="font-heading text-6xl lg:text-[8rem] leading-none m-0 text-text-light text-shadow">Cordoba</h1>
                            <h3 className="font-body text-xl md:text-2xl text-text-light tracking-wide">{t.hero.valueStatement}</h3>  
                        </div>
                    </div>
                </div>

        </section>
    );
}