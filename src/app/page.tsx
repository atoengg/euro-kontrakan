import { Layouts } from "@/components/layouts";
import { HeroSection } from "@/components/section/HeroSection";
import { Card } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layouts>
        <HeroSection/>
      </Layouts>
    </>
  );
}
