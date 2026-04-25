import React from "react";

import ArticlesSection from "@/modules/components/home/sections/ArticlesSection";
import BaseCtaSection from "@/modules/components/home/sections/BaseCtaSection";
import ExperienceContactSection from "@/modules/components/home/sections/ExperienceContactSection";
import HeroSection from "@/modules/components/home/sections/HeroSection";
import ServicesTabsSection from "@/modules/components/home/sections/ServicesTabsSection";
import StatsTestimonialsSection from "@/modules/components/home/sections/StatsTestimonialsSection";
import TrustedCompaniesSection from "@/modules/components/home/sections/TrustedCompaniesSection";
import WhyChooseUsSection from "@/modules/components/home/sections/WhyChooseUsSection";

const HomePageContent = () => {
  return (
    <>
      <HeroSection />
      <ExperienceContactSection />
      <WhyChooseUsSection />
      <BaseCtaSection />
      <TrustedCompaniesSection />
      <ServicesTabsSection />
      <StatsTestimonialsSection />
      <ArticlesSection />
    </>
  );
};

export default HomePageContent;
