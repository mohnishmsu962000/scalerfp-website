'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUpload, FiZap, FiDownload } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: FiUpload,
    title: 'Upload Your RFP',
    description: 'Drop your RFP document and watch our AI extract every question automatically',
    gradient: 'from-blue-400 via-blue-500 to-blue-600',
    glow: 'group-hover:shadow-blue-500/50',
  },
  {
    number: '02',
    icon: FiZap,
    title: 'AI Magic Happens',
    description: 'Our intelligent agents scan your knowledge base and craft perfect responses',
    gradient: 'from-purple-400 via-purple-500 to-pink-500',
    glow: 'group-hover:shadow-purple-500/50',
  },
  {
    number: '03',
    icon: FiDownload,
    title: 'Export & Win',
    description: 'Review, refine, and export your complete RFP in any format you need',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    glow: 'group-hover:shadow-green-500/50',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-medium mb-6">
            Three Steps to <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Victory</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wasting weeks on RFPs. Start winning in minutes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
              
              <div className={`relative bg-white rounded-3xl p-8 border-2 border-gray-100 group-hover:border-transparent transition-all duration-500 ${step.glow} group-hover:shadow-2xl`}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                    {step.number}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-medium mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}