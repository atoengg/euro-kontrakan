import { Layouts } from "@/components/layouts";
import { AboutUsSection } from "@/components/section/AboutUsSection";
import { ExploreSection } from "@/components/section/ExploreSection";
import { HeroSection } from "@/components/section/HeroSection";


export default function Home() {
  return (
    <>
      <Layouts>
        <HeroSection/>
        <ExploreSection/>
        <AboutUsSection/>
      </Layouts>
    </>
  );
}
