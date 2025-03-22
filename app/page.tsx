import Navbar from "@/components/Navbar";
import BenefitsSection from "@/section/BenefitsSection";
import ExploreAndLearnSection from "@/section/ExploreAndLearnSection";
import HeroSection from "@/section/HeroSection";
import HowItWorks from "@/section/HowItWorks";
import OurUniqueBenefits from "@/section/OurUniqueBenefits";
import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection/>
      <ExploreAndLearnSection/>
      <OurUniqueBenefits/>
      <BenefitsSection/>
      <HowItWorks/>
    </div>
  );
}
