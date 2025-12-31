import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { Footer } from './components/Footer';
export function App() {
  return <main className="w-full min-h-screen bg-[#0a1630] text-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ComingSoonSection />
      <Footer />
    </main>;
}