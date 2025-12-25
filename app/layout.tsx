import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Safira March for headings
const safiraMarch = localFont({
  src: "./fonts/Safira March.ttf",
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

// Libre Baskerville for body text
const libreBaskerville = localFont({
  src: [
    {
      path: "./fonts/LibreBaskerville-VariableFont_wght.ttf",
      weight: "400 700", // Variable font supports weights from 400 to 700
      style: "normal",
    },
    {
      path: "./fonts/LibreBaskerville-Italic-VariableFont_wght.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carolina Cordoba 👩‍💻",
    template: "%s | Carolina Cordoba",
  },
  description: "Personal portfolio showcasing my work in frontend & backend development using Next.js, React and Tailwind CSS.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${safiraMarch.variable} ${libreBaskerville.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}