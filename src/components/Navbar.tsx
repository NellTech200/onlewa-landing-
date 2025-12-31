import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Features',
    href: '#features'
  }, {
    name: 'How It Works',
    href: '#how-it-works'
  }, {
    name: 'about',
    href: '#testimonials'
  }];
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#112650]/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`} initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center ">
            <img
              src="/icon.png"
              alt="Onlewa logo"
              className="w-7 h-7"
            />
            <span className="text-2xl font-bold text-white tracking-tight">
              NLEWA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-blue-100 hover:text-white transition-colors">
                {link.name}
              </button>)}
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 bg-[#112650] pt-24 px-4 md:hidden">
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map(link => <button key={link.name} onClick={() => scrollToSection(link.href)} className="text-xl font-medium text-white hover:text-[#f7821A] transition-colors">
                  {link.name}
                </button>)}
              <Button size="lg" className="w-full max-w-xs mt-4">
                Get Started
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}