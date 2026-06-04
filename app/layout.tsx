import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jakub Sokal - Full Stack Developer",
  description:
    "Portfolio of Jakub Sokal, a Full Stack Developer based in Kilkenny, Ireland. Specialising in Java, C#, JavaScript and Python. Available for new opportunities.",
  keywords: ["Full Stack Developer", "Java", "C#", "JavaScript", "Python", "React", "Spring Boot", "Portfolio", "Kilkenny", "Ireland"],
  authors: [{ name: "Jakub Sokal" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jakubsokal.dev",
    title: "Jakub Sokal - Full Stack Developer",
    description: "Full Stack Developer building scalable web applications.",
    siteName: "Jakub Sokal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jakub Sokal - Full Stack Developer",
    description: "Full Stack Developer building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased font-sans bg-canvas dark:bg-night text-ink dark:text-night-text transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
