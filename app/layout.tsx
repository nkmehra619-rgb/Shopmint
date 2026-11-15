import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HeyMyBuddy — Good finds. Good vibes.",
  description: "Little upgrades, thoughtful picks and feel-good favourites for your everyday.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}