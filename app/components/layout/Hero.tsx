import { getLocaleContent } from "@/app/lib/i18n";
import Image from "next/image";

interface HeroProps {
    locale: string;
}

export default function Hero({ locale }: HeroProps) {
    const t = getLocaleContent(locale);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden mt-0">

            {/* Background image */}
            <div className="absolute inset-0 z-0 top-0">
                <Image src={"/images/heroimg.jpg"} alt="Workspace" fill priority className="object-cover" quality={90} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-bg-overlay/33"/>
                </div>

                {/* Content - layered on top of background */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:px-10 lg:px-16">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    </div>
                </div>

        </section>
    );
}