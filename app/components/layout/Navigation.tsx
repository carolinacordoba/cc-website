import { getLocaleContent } from "@/app/lib/i18n";
import Link from "next/link";

interface NavigationProps {
    locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
    const t = getLocaleContent(locale);

    return(
        <nav className="flex items-center gap-4" aria-label="Main Navigation">
            <ul className="flex items-center gap-4">
                {/* Home - anchor link to hero section */}
                <li>
                    <Link href={`/${locale}#hero`} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav.home}
                    </Link>
                </li>

                {/* About - anchor link */}
                <li>
                <Link href={`/${locale}#about`} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav.about}
                    </Link>
                </li>

                {/* Projects - anchor link */}
                <li>
                <Link href={`/${locale}#projects`} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav.projects}
                    </Link>
                </li>

                {/* Services - regular route */}
                <li>
                <Link href={`/${locale}/services`} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav.services}
                    </Link>
                </li>

                {/* Contact - anchor link */}
                <li>
                <Link href={`/${locale}#contact`} className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {t.nav.contact}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}