import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Coins, Award, Users } from 'lucide-react';
const features = [{
  icon: Clock,
  title: 'Flexible Learning',
  description: 'Learn at your own pace with bite-sized lessons designed for busy schedules.',
  color: 'text-blue-400',
  bg: 'bg-blue-400/10'
}, {
  icon: Coins,
  title: 'Real Earnings',
  description: 'Earn real money as you complete tasks and progress through your courses.',
  color: 'text-orange-400',
  bg: 'bg-orange-400/10'
}, {
  icon: Award,
  title: 'Industry Certifications',
  description: 'Get recognized credentials to boost your CV and career prospects.',
  color: 'text-purple-400',
  bg: 'bg-purple-400/10'
}, {
  icon: Users,
  title: 'Get Hired',
  description: 'We connect you with real job opportunities and help you land your dream job and work form Home.',
  color: 'text-green-400',
  bg: 'bg-green-400/10'
}];
export function FeaturesSection() {
  return <section id="features" className="py-20 bg-[#0a1630] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose ONLEWA?
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
            We're revolutionizing education by combining learning with earning.
            Here's what makes us different.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-200/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}