import { Layouts } from "@/components/layouts";
import { AboutUsSection } from "@/components/section/AboutUsSection";
import { ExploreSection } from "@/components/section/ExploreSection";
import { HeroSection } from "@/components/section/HeroSection";
import { MomentSection } from "@/components/section/MomentSection";
import { OurMemberSection } from "@/components/section/OurMemberSection";


export default function Home() {
  return (
    <>
      <Layouts>
        <HeroSection/>
        <ExploreSection/>
        <AboutUsSection/>
        <MomentSection/>
        <OurMemberSection/>
      </Layouts>
    </>
  );
}
