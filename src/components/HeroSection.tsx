import React from 'react';
import { HeroContent } from './HeroContent';
import { FloatingPhone } from './FloatingPhone';
import { FloatingElements } from './FloatingCards';
import { motion } from 'framer-motion';
export function HeroSection() {
  return <section className="relative min-h-screen w-full overflow-hidden bg-[#112650] flex items-center pt-20">
      {/* 3D Graphical Background Elements */}
      <div className="absolute inset-0 z-0 perspective-1000">
        {/* Radial Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,_#1a3a75_0%,_#112650_50%,_#0a1630_100%)]"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

        {/* Animated Gradient Mesh */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#f7821A] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-10 animate-pulse delay-1000"></div>

        {/* 3D Floating Geometric Shapes */}
        {/* Cube Wireframe */}
        <motion.div animate={{
        rotateY: 360,
        rotateX: 360
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} className="absolute top-20 right-[10%] w-24 h-24 border border-white/10 opacity-30 hidden lg:block" style={{
        transformStyle: 'preserve-3d'
      }}>
          <div className="absolute inset-0 border border-white/20 translate-z-12"></div>
        </motion.div>

        {/* Floating Pyramid/Triangle */}
        <motion.div animate={{
        y: [0, -20, 0],
        rotate: [0, 10, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute bottom-40 left-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-white/5 opacity-40 blur-sm"></motion.div>

        {/* Floating Spheres */}
        <motion.div animate={{
        y: [0, 30, 0],
        x: [0, 10, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className="absolute top-1/3 left-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-transparent opacity-20 blur-md"></motion.div>

        <motion.div animate={{
        y: [0, -40, 0],
        x: [0, -20, 0]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1
      }} className="absolute bottom-1/4 right-[20%] w-20 h-20 rounded-full bg-gradient-to-tr from-orange-400 to-transparent opacity-10 blur-xl"></motion.div>

        {/* Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full py-12 sm:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
          {/* Left Content Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <HeroContent />
          </div>

          {/* Right 3D Scene Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative flex justify-center items-center h-[500px] sm:h-[700px] perspective-1000">
            <div className="relative w-full max-w-[500px] flex justify-center items-center preserve-3d">
              {/* The Phone */}
              <FloatingPhone />

              {/* Floating Cards Layer */}
              <FloatingElements />
            </div>
          </div>
        </div>
      </div>
    </section>;
}