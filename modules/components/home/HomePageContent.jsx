import React from "react";

import ArticlesSection from "@/modules/components/home/sections/ArticlesSection";
import BaseCtaSection from "@/modules/components/home/sections/BaseCtaSection";
import ExperienceContactSection from "@/modules/components/home/sections/ExperienceContactSection";
import HeroSection from "@/modules/components/home/sections/HeroSection";
import ServicesTabsSection from "@/modules/components/home/sections/ServicesTabsSection";
import StatsTestimonialsSection from "@/modules/components/home/sections/StatsTestimonialsSection";
import TrustedCompaniesSection from "@/modules/components/home/sections/TrustedCompaniesSection";
import WhyChooseUsSection from "@/modules/components/home/sections/WhyChooseUsSection";
import ExperienceCountSection from "./sections/ExperienceCountSection";
import AboutFounderIntro from "./sections/AboutFounderIntro";
import TabbedSection from "./sections/TabbedSection";
import ProcessSection from "./sections/ProcessSection";
import EmbedVideoSection from "./sections/EmbedVideoSection";


const HomePageContent = () => {
  return (
    <>
      <HeroSection />
      <ExperienceCountSection />
      <WhyChooseUsSection />
      <AboutFounderIntro />
      <TabbedSection />
      <ProcessSection />
      <BaseCtaSection />
      {/* <TrustedCompaniesSection /> */}
      <EmbedVideoSection />
      {/* <ServicesTabsSection /> */}
      {/* <StatsTestimonialsSection /> */}
      <ArticlesSection />
    </>
  );
};

export default HomePageContent;
