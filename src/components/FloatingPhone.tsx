import React from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, TrendingUp, ChevronRight, Bell } from 'lucide-react';
export function FloatingPhone() {
  return <motion.div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden" style={{
    transformStyle: 'preserve-3d',
    rotateY: -12,
    rotateX: 5
  }} initial={{
    y: 20,
    opacity: 0
  }} animate={{
    y: [0, -15, 0],
    opacity: 1
  }} transition={{
    y: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    },
    opacity: {
      duration: 0.8
    }
  }}>
      {/* Phone Notch/Bezel details */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gray-800 rounded-b-xl z-20"></div>

      {/* Screen Content */}
      <div className="w-full h-full bg-[#0f172a] relative overflow-hidden flex flex-col">
        {/* Header */}
        <div className="pt-10 px-6 pb-4 flex justify-between items-center bg-[#112650]">
          <div>
            <p className="text-xs text-blue-300">Welcome back,</p>
            <h3 className="text-white font-bold text-lg">Alex Johnson</h3>
          </div>
          <div className="p-2 bg-white/10 rounded-full">
            <Bell className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-hidden relative p-5 space-y-5 bg-gradient-to-b from-[#112650] to-[#0B1A3A]">
          {/* Earnings Card */}
          <div className="bg-gradient-to-r from-[#f7821A] to-[#e07010] rounded-2xl p-5 text-white shadow-lg shadow-orange-900/30">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-medium text-orange-100">
                Total Earnings
              </span>
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-3xl font-bold mb-1">XAF 25,000</div>
            <div className="text-xs text-orange-100 bg-white/20 inline-block px-2 py-1 rounded-md">
              +XAF 5,000 this week
            </div>
          </div>

          {/* Continue Learning */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-white font-semibold">Continue Learning</h4>
              <span className="text-xs text-blue-300">View All</span>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="relative h-32 rounded-xl bg-gray-800 mb-3 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                {/* Abstract thumbnail */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">
                    12:45
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              <h5 className="text-white font-medium text-sm mb-1">
                Intro to UI Design Principles
              </h5>
              <div className="w-full bg-gray-700 h-1.5 rounded-full mt-2">
                <div className="bg-[#f7821A] h-1.5 rounded-full w-[75%]"></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-gray-400">Lesson 3 of 8</span>
                <span className="text-[10px] text-[#f7821A]">75%</span>
              </div>
            </div>
          </div>

          {/* Daily Tasks */}
          <div>
            <h4 className="text-white font-semibold mb-3">Daily Tasks</h4>
            <div className="space-y-2">
              {[{
              title: 'Watch 2 video lessons',
              done: true
            }, {
              title: 'Complete Quiz #4',
              done: false
            }, {
              title: 'Share progress',
              done: false
            }].map((task, i) => <div key={i} className="flex items-center p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${task.done ? 'bg-green-500/20 text-green-500' : 'bg-gray-700 border border-gray-600'}`}>
                    {task.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                  <span className={`text-sm ${task.done ? 'text-gray-400 line-through' : 'text-gray-200'}`}>
                    {task.title}
                  </span>
                </div>)}
            </div>
          </div>
        </div>

        {/* Bottom Nav Mockup */}
        <div className="h-16 bg-[#112650] border-t border-white/5 flex justify-around items-center px-2">
          {[1, 2, 3, 4].map(item => <div key={item} className={`w-10 h-10 rounded-xl flex items-center justify-center ${item === 1 ? 'text-[#f7821A]' : 'text-gray-500'}`}>
              <div className={`w-6 h-6 rounded-md ${item === 1 ? 'bg-[#f7821A]/20' : 'bg-gray-700/50'}`}></div>
            </div>)}
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-500 rounded-full"></div>
      </div>

      {/* Glossy Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30 rounded-[2.5rem]"></div>
    </motion.div>;
}