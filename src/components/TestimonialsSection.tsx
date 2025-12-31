import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const stats = [{
  label: 'Active Students',
  value: '50,000+'
}, {
  label: 'Earnings Paid',
  value: '₦150M+'
}, {
  label: 'Average Rating',
  value: '4.9/5'
}, {
  label: 'Completion Rate',
  value: '95%'
}];
const testimonials = [{
  name: 'Sarah Adebayo',
  role: 'UI/UX Designer',
  image: 'https://i.pravatar.cc/150?img=5',
  quote: 'I learned UI design on ONLEWA and earned enough to buy my first laptop. Now I work remotely for a US company!',
  earnings: '₦125,000 Earned'
}, {
  name: 'Michael Okafor',
  role: 'Web Developer',
  image: 'https://i.pravatar.cc/150?img=11',
  quote: 'The bite-sized lessons made it easy to learn coding while working my day job. The earnings were a huge motivation.',
  earnings: '₦85,000 Earned'
}, {
  name: 'Chioma Eze',
  role: 'Digital Marketer',
  image: 'https://i.pravatar.cc/150?img=9',
  quote: 'Getting certified through ONLEWA opened so many doors. The practical tasks gave me a real portfolio to show clients.',
  earnings: '₦210,000 Earned'
}];
export function TestimonialsSection() {
  return <section id="testimonials" className="py-24 bg-[#0a1630] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-300 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>)}
        </div>

        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </motion.h2>
          <p className="text-blue-200 text-lg">
            Join thousands of students transforming their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative hover:bg-white/10 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 text-white/10 w-10 h-10" />

              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-[#f7821A]" />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

              <div className="inline-block bg-[#f7821A]/20 text-[#f7821A] px-3 py-1 rounded-full text-sm font-medium border border-[#f7821A]/30">
                {testimonial.earnings}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}