import type { Metadata } from "next";
import "./globals.css";
import { geist, syne } from "./fonts";
import SmoothScroll from "@/components/providers/SmoothScroll";
import AnimationProvider from "@/components/providers/AnimationProvider";
import ScrollProvider from "@/components/providers/ScrollProvider";
import PageTransition from "@/components/transition/PageTransition";
import BackgroundVideo from "@/components/background/BackgroundVideo";
import BackToTop from "@/components/layout/BackToTop";
import CustomCursor from "@/components/layout/CustomCursor";
import PersonSchema from "@/components/seo/PersonSchema";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";






export const metadata: Metadata = {
  metadataBase: new URL("https://abanoubnasser.com"),
  title: {
    default: "Abanoub Nasser",
    template: "%s | Abanoub Nasser",
  },
  description: "Brand Designer",
  openGraph: {
    title: "Abanoub Nasser",
    description: "Brand Designer",
    url: "https://abanoubnasser.com",
    siteName: "Abanoub Nasser",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
  keywords: [
    "abanoub nasser",
    "abanoubnasser",
    "abanob",
    "abanoub",
    "nasser",
    "abanoub nasr",
    "abanoub nassr",
    "abanoub naser",
    "abanob nasser",
    "designer",
    "egyptian designer",
    "arabic brand designer",
    "brand",
    "branding",
    "identity",
    "visual identity",
    "visual systems",
    "graphic design",
    "digital experiences",
    "packaging design",
    "typography",
    "creative direction",
    "logo design",
    "brand strategy",
    "illustration",
    "art direction",
    "creative portfolio",
    "design thinking",
    "visual storytelling",
    "brand communication",
    "brand recognition",
    "brand impact",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Abanoub Nasser",
    description: "Brand Designer",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${syne.variable} scroll-smooth`}>
      <body className="bg-[#090909] text-white antialiased overflow-x-hidden">
        <GoogleAnalytics />
        <PersonSchema />
        <SpeedInsights/>
        <BackgroundVideo />
        <CustomCursor />
        <BackToTop />
        <PageTransition>
          <AnimationProvider />
          <ScrollProvider />
          <SmoothScroll>{children}</SmoothScroll>
        </PageTransition>
         <Analytics />
      </body>
    </html>
  );
}