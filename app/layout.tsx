import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aitaddi.tech"),
  title: "Youssef AIT ADDI — Product Design & Development",
  alternates: { canonical: "/" },
  openGraph: { title: "Youssef AIT ADDI — Product Design & Development", description: "Thoughtful interfaces, from idea to interaction. Selected work: Kelus, Digi Moqef, and Caffeine.", url: "https://aitaddi.tech", type: "website", images: [{ url: "/projects/kelus-site.jpg", alt: "Kelus study app" }] },
  description:
    "Portfolio of Youssef AIT ADDI, exploring product design and building things end to end. Projects: Kelus, Digi Moqef, Caffeine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
