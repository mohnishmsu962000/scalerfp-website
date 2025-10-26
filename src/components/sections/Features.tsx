'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiZap, FiDatabase, FiFileText, FiUsers, FiShield, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    icon: FiZap,
    title: 'AI-Powered Responses',
    description: 'Generate comprehensive, accurate answers using advanced language models trained on your data',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: FiDatabase,
    title: 'Smart Knowledge Base',
    description: 'Upload documents once and let AI reference them across all your RFPs automatically',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: FiFileText,
    title: 'Multi-Format Export',
    description: 'Export to Word, Excel, or PDF with perfect formatting that matches your brand',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates and comment threads',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and SOC 2 compliance keep your data safe',
    gradient: 'from-red-400 to-pink-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Analytics & Insights',
    description: 'Track response quality, win rates, and team performance with detailed analytics',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-medium mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Win More
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that make RFP responses effortless
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-5 blur-2xl transition-all duration-500`} />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 group-hover:border-gray-300 group-hover:shadow-xl transition-all duration-500 h-full">
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-medium mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}