import { Geist } from "next/font/google";
import { Syne } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});