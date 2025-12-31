import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bell, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export function ComingSoonSection() {
  // Set launch date (30 days from now for demo)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  function calculateTimeLeft(): TimeLeft {
    const difference = launchDate.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60)
      };
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send to your backend
    console.log('Email submitted:', email);
  };
  const timeBlocks = [{
    label: 'Days',
    value: timeLeft.days
  }, {
    label: 'Hours',
    value: timeLeft.hours
  }, {
    label: 'Minutes',
    value: timeLeft.minutes
  }, {
    label: 'Seconds',
    value: timeLeft.seconds
  }];
  return <section className="relative py-32 bg-[#050c1a] overflow-hidden">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f7821A] rounded-full blur-[150px]"></motion.div>

        <motion.div animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px]"></motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7821A]/20 border border-[#f7821A]/30 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-[#f7821A]" />
            <span className="text-sm font-medium text-[#f7821A]">
              Something Exciting is Coming
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Mentorship <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7821A] via-orange-300 to-[#f7821A] bg-[length:200%_auto] animate-gradient">
              Program Launching Soon
            </span>
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
          delay: 0.2
        }} className="text-xl text-blue-200/80 mb-16 max-w-2xl mx-auto">
            Get 1-on-1 guidance from industry experts, personalized learning
            paths, and accelerated career growth. Limited spots available.
          </motion.p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
            {timeBlocks.map((block, index) => <motion.div key={block.label} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7821A] to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

                {/* Timer Block */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8">
                  <motion.div key={block.value} initial={{
                y: -20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} className="text-5xl md:text-7xl font-bold text-white mb-2 font-mono">
                    {String(block.value).padStart(2, '0')}
                  </motion.div>
                  <div className="text-sm md:text-base text-blue-300 uppercase tracking-wider font-medium">
                    {block.label}
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Email Capture Form */}
          {!isSubmitted ? <motion.form initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.7
        }} onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 bg-transparent text-white placeholder-blue-300/50 outline-none" />
                <Button type="submit" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Join Waitlist
                </Button>
              </div>
              <p className="text-sm text-blue-300/60 mt-3">
                Be the first to know when we launch. No spam, ever.
              </p>
            </motion.form> : <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="max-w-md mx-auto p-6 bg-green-500/10 border border-green-500/30 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center justify-center gap-3 text-green-400 mb-2">
                <Bell className="w-5 h-5" />
                <span className="font-bold">You're on the list!</span>
              </div>
              <p className="text-sm text-green-300/80">
                We'll notify you as soon as the mentorship program launches.
              </p>
            </motion.div>}

          {/* Trust Indicators */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.9
        }} className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-blue-300/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>500+ Already Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#f7821A] rounded-full animate-pulse"></div>
              <span>Limited to 100 Spots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Early Bird Discount Available</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>;
}