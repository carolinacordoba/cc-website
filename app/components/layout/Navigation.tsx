import { getLocaleContent } from "@/app/lib/i18n";
import Link from "next/link";

interface NavigationProps {
    locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
    const t = getLocaleContent(locale);

    return(
        <nav className="flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-12">
                {/* Home - anchor link to hero section */}
                <li>
                    <Link href={`/${locale}#hero`} className="font-heading text-3xl nav-effect text-shadow">
                    {t.nav.home}
                    </Link>
                </li>

                {/* About - anchor link */}
                <li>
                <Link href={`/${locale}#about`} className="font-heading text-3xl nav-effect text-shadow">
                    {t.nav.about}
                    </Link>
                </li>

                {/* Projects - anchor link */}
                <li>
                <Link href={`/${locale}#projects`} className="font-heading text-3xl nav-effect text-shadow">
                    {t.nav.projects}
                    </Link>
                </li>

                {/* Services - regular route */}
                <li>
                <Link href={`/${locale}/services`} className="font-heading text-3xl nav-effect text-shadow">
                    {t.nav.services}
                    </Link>
                </li>

                {/* Contact - anchor link */}
                <li>
                <Link href={`/${locale}#contact`} className="font-heading text-3xl nav-effect text-shadow">
                    {t.nav.contact}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}