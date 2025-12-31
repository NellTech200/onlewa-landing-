import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Target, BookOpen, Trophy } from 'lucide-react';
const steps = [{
  icon: UserPlus,
  title: 'Sign Up Free',
  description: 'Create your account in 30 seconds. No credit card required.'
}, {
  icon: Target,
  title: 'Choose Your Path',
  description: 'Select from tech skills like AI, Design, or Blockchain.'
}, {
  icon: BookOpen,
  title: 'Learn & Complete Tasks',
  description: 'Watch bite-sized lessons and complete practical tasks.'
}, {
  icon: Trophy,
  title: 'Earn & Get Certified',
  description: 'Cash out your earnings and receive your industry certificate.'
}];
export function HowItWorksSection() {
  return <section id="how-it-works" className="py-24 bg-[#112650] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Journey in 4 Simple Steps
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-blue-200 text-lg">
            From beginner to certified pro, we've made the path clear and
            rewarding.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }} className="relative flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#f7821A] text-white font-bold flex items-center justify-center text-sm shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-[#0a1630] border-4 border-[#112650] flex items-center justify-center mb-6 relative z-0 shadow-xl group hover:border-[#f7821A] transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-blue-200 group-hover:text-[#f7821A] transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}