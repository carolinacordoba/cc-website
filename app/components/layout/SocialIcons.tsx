import { getLocaleContent } from "@/app/lib/i18n";
import { GitHub, Linkedin, Mail } from "react-feather";

interface SocialIconsProps {
    locale: string;
}

export default function SocialIcons({ locale }: SocialIconsProps) {
    const t = getLocaleContent(locale);

    const socialLinks = {
        github: 'https://github.com/carolinacordoba',
        linkedin: 'https://www.linkedin.com/in/carolina-cordoba-455ab9166/',
        email: 'mailto:carolinacordoba.rg@gmail.com'
    };

    return(
        <div className="flex items-center gap-6" aria-label="Social Links">

            {/* Github */}
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="nav-effect">
                <GitHub className="w-5 h-5"/>
            </a>

            {/* Linkedin */}
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="nav-effect">
                <Linkedin className="w-5 h-5"/>
            </a>

            {/* Mail */}
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" className="nav-effect">
                <Mail className="w-5 h-5"/>
            </a>
        </div>
    )
};