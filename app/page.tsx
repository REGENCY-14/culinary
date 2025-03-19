import Navbar from "@/components/Navbar";
import ExploreAndLearnSection from "@/section/ExploreAndLearnSection";
import HeroSection from "@/section/HeroSection";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <ExploreAndLearnSection/>
    </div>
  );
}
