import { getLocaleContent } from "@/app/lib/i18n";

interface SocialIconsProps {
    locale: string;
}

export default function SocialIcons({ locale }: SocialIconsProps) {
    const t = getLocaleContent(locale);

    const socialLinks = {
        github: 'https://github.com/carolinacordoba',
        linkedin: 'https://www.linkedin.com/in/carolina-cordoba-455ab9166/',
        email: 'mailto:carolinacordoba.rg@gmail.com'
    }

    return(
    )
};