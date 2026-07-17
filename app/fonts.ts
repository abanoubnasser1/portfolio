import localFont from "next/font/local";

export const lamaSans = localFont({
  src: [
    { path: "./fonts/LamaSans/LamaSans-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-ThinItalic.otf", weight: "100", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-ExtraLight.otf", weight: "200", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-ExtraLightItalic.otf", weight: "200", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-LightItalic.otf", weight: "300", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-SemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-SemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-ExtraBold.otf", weight: "800", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-ExtraBoldItalic.otf", weight: "800", style: "italic" },
    { path: "./fonts/LamaSans/LamaSans-Black.otf", weight: "900", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-lama-sans",
  display: "swap",
});

export const lamaSansCondensed = localFont({
  src: [
    { path: "./fonts/LamaSans/LamaSans-BoldCondensed.otf", weight: "700", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-ExtraBoldCondensed.otf", weight: "800", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-BlackCondensed.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-lama-condensed",
  display: "swap",
});

export const lamaSansExpanded = localFont({
  src: [
    { path: "./fonts/LamaSans/LamaSans-RegularExpanded.otf", weight: "400", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-MediumExpanded.otf", weight: "500", style: "normal" },
    { path: "./fonts/LamaSans/LamaSans-SemiBoldExpanded.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-lama-expanded",
  display: "swap",
});