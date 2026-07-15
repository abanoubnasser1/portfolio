import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";
import ScrollProvider from "@/components/providers/ScrollProvider";
import PageTransition from "@/components/transition/PageTransition";
import BackgroundVideo from "@/components/background/BackgroundVideo";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Abanoub Nasser",
  description: "Brand Identity Designer",
  openGraph: {
    images: '/og-image.png',
  },
  keywords: ['abanoub nasser', 'abanoubnasser', 'designer', 'brand', 'branding', 'identity', 'visual identity', 'visual systems', 'graphic design', 'digital experiences', 'packaging design', 'typography', 'creative direction', 'logo design', 'brand strategy', 'illustration', 'art direction', 'creative portfolio', 'design thinking', 'visual storytelling', 'brand communication', 'brand recognition', 'brand impact'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-[#090909] text-white antialiased overflow-x-hidden">
        <BackgroundVideo />

        <PageTransition>
          <AnimationProvider />
          <ScrollProvider />

          <SmoothScroll>{children}</SmoothScroll>
        </PageTransition>
      </body>
    </html>
  );
}