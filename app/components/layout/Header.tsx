import { getLocaleContent } from "@/app/lib/i18n";
import Link from "next/link";
import Navigation from "./Navigation";

interface HeaderProps {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const t = getLocaleContent(locale);

    return(
        <header className="sticky top-0 z-50 border-b border-border-soft backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">

                {/* Logo */}
                <Link href={`/${locale}`} className="hover:opacity-80 transition-opacity"></Link>

                {/* Navigation */}
                <Navigation locale={locale} />

                {/* Social Icons */}
            </div>
        </header>
    );
}