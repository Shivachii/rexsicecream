import type { Metadata } from "next";
import "@fontsource/lilita-one/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rex's Ice Cream — Happiness, one scoop at a time",
  description: "Handcrafted ice cream, big flavour and happy colours. Find Rex's in Westlands and Lavington, Nairobi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
