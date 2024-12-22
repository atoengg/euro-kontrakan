import { Poppins } from "next/font/google";
import "./globals.css";
import { Layouts } from "@/components/layouts";
import { Footer } from "@/components/fragments/Footer";
import "@uploadthing/react/styles.css";
import "aos/dist/aos.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layouts>
          {children}
        </Layouts>
        <Footer />
      </body>
    </html>
  );
}
