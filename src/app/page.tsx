import { Layouts } from "@/components/layouts";
import { AboutUsSection } from "@/components/section/AboutUsSection";
import { ExploreSection } from "@/components/section/ExploreSection";
import { HeroSection } from "@/components/section/HeroSection";
import { MomentSection } from "@/components/section/MomentSection";
import { OurMemberSection } from "@/components/section/OurMemberSection";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Euro-Kontrakan",
  description: "Euro Kontrakan merupakan sebuah website yang berfungsi untuk menyimpan kenangan gila kami selama Euro Kontrakan berdiri.",
  icons: {
    icon: '/euro-logo.png'
  }
};


export default function Home() {
  return (
    <>
      <Layouts>
        <HeroSection />
        <ExploreSection />
        <AboutUsSection />
        <MomentSection />
        <OurMemberSection />
      </Layouts>
    </>
  );
}
