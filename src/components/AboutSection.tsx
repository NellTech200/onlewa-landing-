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
              <Target className="w-4 h-4 text-[#f7821A]" />
              <span className="text-sm font-medium text-blue-200">
                Our Mission
              </span>
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
                  The Problem
                </h3>
                <p className="text-blue-200/80 leading-relaxed mb-4">
                  Millions invest time and money learning tech skills, but
                  struggle to find real work. Traditional education doesn't
                  connect learners to actual job opportunities.
                </p>
                <ul className="space-y-2 text-sm text-blue-300/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    <span>No practical experience during learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    <span>Expensive courses with no job guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">×</span>
                    <span>
                      Disconnect between skills taught and market needs
                    </span>
                  </li>
                </ul>
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

          {/* Dual Audience Value Props */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.1,
          duration: 0.8
        }} className="grid md:grid-cols-2 gap-6 mb-16">
            {/* For Learners */}
            <div className="bg-gradient-to-br from-blue-600/10 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white">For Learners</h4>
              </div>
              <p className="text-blue-200/70 text-sm">
                Gain in-demand tech skills, earn as you learn, get certified,
                and access global remote job opportunities.
              </p>
            </div>

            {/* For Businesses */}
            <div className="bg-gradient-to-br from-[#f7821A]/10 to-transparent backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f7821A]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#f7821A]" />
                </div>
                <h4 className="text-lg font-bold text-white">For Businesses</h4>
              </div>
              <p className="text-blue-200/70 text-sm">
                Access a pool of skilled, certified talent ready to contribute.
                Hire confidently with verified portfolios and practical
                experience.
              </p>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1.3,
          duration: 0.8
        }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 1.4 + index * 0.1
          }} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <stat.icon className="w-6 h-6 text-[#f7821A]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-300/70">{stat.label}</div>
              </motion.div>)}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 2,
          duration: 1
        }} className="flex flex-col items-center mt-16">
            <p className="text-sm text-blue-300/60 mb-3">
              Discover How It Works
            </p>
            <motion.div animate={{
            y: [0, 8, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <motion.div animate={{
              opacity: [0, 1, 0]
            }} transition={{
              duration: 1.5,
              repeat: Infinity
            }} className="w-1 h-2 bg-[#f7821A] rounded-full"></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}