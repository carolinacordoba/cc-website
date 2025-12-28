import { getLocaleContent } from "@/app/lib/i18n";
import Link from "next/link";

interface ButtonProps {
    locale: string;
}

export default function Button({ locale }: ButtonProps)  {
    const t = getLocaleContent(locale);

    return (
        <div className="font-heading w-1/3 text-center bg-text-primary text-bg-soft py-5 px-6 rounded-2xl text-3xl cursor-pointer button-effect">
            <Link href={`/${locale}#contact`}>{t.button.cta}</Link>
        </div>
    )
}