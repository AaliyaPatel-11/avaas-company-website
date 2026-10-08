import React from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyAvaas } from "@/components/sections/WhyAvaas";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LocationIntelligence } from "@/components/sections/LocationIntelligence";
import { Technology } from "@/components/sections/Technology";
import { CurrentStage } from "@/components/sections/CurrentStage";
import { Roadmap } from "@/components/sections/Roadmap";
import { Vision } from "@/components/sections/Vision";
import { BlogSection } from "@/components/sections/BlogSection";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyAvaas />
      <HowItWorks />
      <LocationIntelligence />
      <Technology />
      <CurrentStage />
      <Roadmap />
      <Vision />
      <BlogSection />
      <Contact />
    </>
  );
}
