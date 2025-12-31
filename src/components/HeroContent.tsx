import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Star, Users } from 'lucide-react';
import { Button } from './ui/Button';
export function HeroContent() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return <motion.div className="max-w-xl relative z-20 text-center sm:text-left pt-10 sm:pt-0" variants={containerVariants} initial="hidden" animate="visible">
      

      {/* Headline */}
      <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
        Learn Fast. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7821A] to-[#ffb066]">
          Earn Smart.
        </span>{' '}
        <br />
        Connect.Grow.
      </motion.h1>

      {/* Subheading */}
      <motion.p variants={itemVariants} className="text-lg sm:text-xl text-blue-100/80 mb-8 leading-relaxed max-w-lg mx-auto sm:mx-0">
        Master in-demand skills through bite-sized lessons and earn real money
        while you learn.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center sm:justify-start">
        <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
          Start Learning & Earning
        </Button>
        <Button variant="outline" size="lg" leftIcon={<PlayCircle className="w-5 h-5" />}>
          See How It Works
        </Button>
      </motion.div>

      {/* Trust Indicators */}
      
    </motion.div>;
}