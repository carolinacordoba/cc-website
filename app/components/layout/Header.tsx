import { getLocaleContent } from "@/app/lib/i18n";

interface HeaderProps {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const t = getLocaleContent(locale);

    return(

    )}