"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navlinks/Navbar";
import HeroSection from "./LandingPages/HeroSection";
import { motion } from "framer-motion";
import MarketingSection from "./LandingPages/MarketingSection";
import AboutSection from "./LandingPages/AboutSection";
import VisionMission from "./LandingPages/VisionMission";
import RecentProjects from "./LandingPages/RecentProjects";
import TestimonySection from "./LandingPages/TestimonySection";
import OngoingProjects from "./LandingPages/OngoingProjects";
import Footer from "./LandingPages/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MarketingSection />
      <AboutSection />
      <VisionMission/>
      <RecentProjects/>
      <TestimonySection/>
      <OngoingProjects/>
      <Footer/>
    </div>
  );
};

export default Main;
