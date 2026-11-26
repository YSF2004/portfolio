import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://aitaddi.tech"),
  title: "Youssef AIT ADDI — Product Design & Development",
  alternates: { canonical: "/" },
  openGraph: { title: "Youssef AIT ADDI — Product Design & Development", description: "Thoughtful interfaces, from idea to interaction. Selected work: Kelus, Digi Moqef, and Caffeine.", url: "https://aitaddi.tech", type: "website", images: [{ url: "/projects/kelus-site.jpg", alt: "Kelus study app" }] },
  description:
    "Portfolio of Youssef AIT ADDI, exploring product design and building things end to end. Projects: kelus, Digi Moqef, Caffeine.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
