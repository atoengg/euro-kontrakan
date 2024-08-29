import { Layouts } from "@/components/layouts";
import { ExploreSection } from "@/components/section/ExploreSection";
import { HeroSection } from "@/components/section/HeroSection";


export default function Home() {
  return (
    <>
      <Layouts>
        <HeroSection/>
        <ExploreSection/>
      </Layouts>
    </>
  );
}
