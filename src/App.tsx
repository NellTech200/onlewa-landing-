import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';

export function App() {
  return <main className="w-full min-h-screen bg-[#0a1630] text-white scroll-smooth">
      <Navbar />
      <AboutSection />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      
      <ComingSoonSection />
      <Footer />
    </main>;
}