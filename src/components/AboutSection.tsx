import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Users, TrendingUp, ArrowRight, Target } from 'lucide-react';
export function AboutSection() {
  const stats = [{
    icon: Globe,
    label: 'Global Reach',
    value: '50+ Countries'
  }, {
    icon: Users,
    label: 'Active Learners',
    value: '50,000+'
  }, {
    icon: TrendingUp,
    label: 'Job Placements',
    value: '12,000+'
  }, {
    icon: Zap,
    label: 'Skills Taught',
    value: '100+'
  }];
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#050c1a] via-[#0a1630] to-[#112650] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(247,130,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(247,130,26,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>

        {/* Gradient Orbs */}
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#f7821A] rounded-full blur-[120px]"></motion.div>

        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.1, 0.2, 0.1]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"></motion.div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-[#f7821A] rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -40, 0],
        opacity: [0, 0.8, 0]
      }} transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 3
      }} />)}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Opening Statement */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3,
            duration: 0.8
          }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Bridging the Gap Between{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7821A] to-orange-300">
                Skills & Opportunity
              </span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-xl md:text-2xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed">
              Young people worldwide want to gain tech skills, work remotely,
              and earn globally. But there's a massive gap between learning and
              landing real opportunities.
            </motion.p>
          </motion.div>

          {/* Problem → Solution Flow */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* The Problem */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 border-2 border-red-400 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  About ONLEWA
                </h3>
                <p className="text-blue-200/80 leading-relaxed mb-4">
                  ONLEWA is a  EdTech platform in progress to solve a global problem ( the gap between Tech skill acquisition and real job opportunities).
                    In a world where  young people are hungry to get Tech skills and work from home, ONLEWA equips them with in-demand digital and tech skills they can use to work remotely, build careers, and earn globally.

                    But we don’t stop at teaching.  

                    Learners on ONLEWA earn rewards as they study, and when they complete their programs, we go a step further to connect them directly with companies and freelance job opportunities.

                    We make it easy for businesses to find skilled talent, and for learners to build real income from what they’ve learned.  

                    With ONLEWA, every lesson is a step closer to independence, impact, and income.

                    Learn fast. Earn Smart. Connect. Grow.  
                    That’s the ONLEWA promise.
                </p>
                
              </div>
            </motion.div>

            {/* The Solution */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7821A]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#f7821A]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#f7821A]/10 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#f7821A]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Solution
                </h3>
                <p className="text-blue-200/80 leading-relaxed mb-4">
                  ONLEWA equips you with in-demand skills, rewards you as you
                  learn, and directly connects you to companies and freelance
                  opportunities worldwide.
                </p>
                <ul className="space-y-2 text-sm text-blue-300/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Earn real money while learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Build portfolio through practical tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Direct connection to hiring companies</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>;
}