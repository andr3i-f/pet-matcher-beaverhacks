import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocationProvider } from "../../context/LocationProvider";
import { MatchProvider } from "../../context/MatchContext";
import NavMenu from "../components/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawfect Match",
  description: "Find your perfect pet match!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MatchProvider>
          <LocationProvider>
            <NavMenu />
            {children}
          </LocationProvider>
        </MatchProvider>
      </body>
    </html>
  );
}
