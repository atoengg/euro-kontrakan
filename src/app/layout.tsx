"use client"

import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Layouts } from "@/components/layouts";
import { Footer } from "@/components/fragments/Footer";
import "@uploadthing/react/styles.css";
import "aos/dist/aos.css";

// Fonts Configuration
const foundersGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/FoundersGrotesk-Semibold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-foundersGrotesk",
});

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-neueMontreal",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="iUU6oyFLNvK5L_tOsYv-kRLwOzcNJVa3N9A4UtjTHPI"
        />
      </head>
      <body
        className={`${foundersGrotesk.variable} ${neueMontreal.variable} ${poppins.className}`}
      >
        <Layouts>{children}</Layouts>
        <Footer />
      </body>
    </html>
  );
}
