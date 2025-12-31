import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Palette, Link, Megaphone, Coins, Award, Trophy } from 'lucide-react';
// Shared styles for glassmorphism cards
const cardStyle = 'absolute backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl flex items-center gap-3 p-3 sm:p-4 z-10';
export function SkillCard({
  icon: Icon,
  title,
  color,
  delay,
  position
}: {
  icon: any;
  title: string;
  color: string;
  delay: number;
  position: string;
}) {
  return <motion.div className={`${cardStyle} ${position}`} initial={{
    opacity: 0,
    scale: 0.8,
    y: 20
  }} animate={{
    opacity: 1,
    scale: 1,
    y: 0
  }} transition={{
    delay,
    duration: 0.6,
    type: 'spring'
  }} whileHover={{
    scale: 1.05,
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
  }}>
      <div className={`p-2.5 rounded-xl ${color} text-white`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-300 font-medium uppercase tracking-wider">
          Skill
        </p>
        <h4 className="text-white font-bold text-sm sm:text-base whitespace-nowrap">
          {title}
        </h4>
      </div>
    </motion.div>;
}
export function EarningsCard({
  amount,
  label,
  delay,
  position
}: {
  amount: string;
  label: string;
  delay: number;
  position: string;
}) {
  return <motion.div className={`${cardStyle} ${position} border-[#f7821A]/30`} initial={{
    opacity: 0,
    x: 20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    delay,
    duration: 0.6
  }}>
      <div className="relative">
        <div className="absolute inset-0 bg-[#f7821A] blur-lg opacity-20 rounded-full"></div>
        <div className="bg-[#f7821A] p-2 rounded-full text-white relative z-10">
          <Coins size={20} />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{amount}</h4>
        <p className="text-xs text-orange-200">{label}</p>
      </div>
    </motion.div>;
}
export function BadgeCard({
  delay,
  position
}: {
  delay: number;
  position: string;
}) {
  return <motion.div className={`${cardStyle} ${position}`} initial={{
    opacity: 0,
    rotate: -10
  }} animate={{
    opacity: 1,
    rotate: 0
  }} transition={{
    delay,
    duration: 0.8
  }}>
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full text-white shadow-lg">
        <Award size={24} />
      </div>
      <div>
        <h4 className="text-white font-bold text-sm">Certified</h4>
        <div className="flex gap-1 mt-1">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>)}
        </div>
      </div>
    </motion.div>;
}
export function FloatingElements() {
  return <div className="absolute inset-0 pointer-events-none sm:pointer-events-auto">
      {/* Skill Cards - Left Side */}
      <SkillCard icon={Bot} title="AI & ML" color="bg-purple-600" delay={0.2} position="top-[15%] -left-[5%] sm:left-[0%]" />

      <SkillCard icon={Palette} title="UI/UX Design" color="bg-pink-500" delay={0.4} position="bottom-[25%] -left-[10%] sm:-left-[5%]" />

      {/* Skill Cards - Right Side */}
      <SkillCard icon={Link} title="Blockchain" color="bg-blue-500" delay={0.6} position="top-[20%] -right-[5%] sm:right-[0%]" />

      <SkillCard icon={Megaphone} title="Marketing" color="bg-green-500" delay={0.8} position="bottom-[30%] -right-[10%] sm:-right-[5%]" />

      {/* Earnings & Badges - Floating around */}
      <EarningsCard amount="₦50,000" label="Total Earned" delay={1.0} position="top-[50%] -right-[15%] sm:-right-[12%]" />

      <BadgeCard delay={1.2} position="bottom-[10%] left-[10%]" />
    </div>;
}