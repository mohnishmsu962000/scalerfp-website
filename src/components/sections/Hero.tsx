'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiClock, FiCreditCard, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import ScheduleDemoModal from '@/components/modals/ScheduleDemoModal';

export default function Hero() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-200 text-purple-700 text-sm font-medium shadow-lg">
              <FiZap className="h-4 w-4" />
              AI-Powered RFP Automation
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-6 leading-tight"
          >
            Let AI Agents Handle Your{' '}
            <motion.span 
              className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              RFP Responses
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            Transform hours of RFP work into minutes with AI that analyzes your knowledge base and generates winning responses automatically
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-8 mb-12 text-sm"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <FiClock className="h-4 w-4 text-green-600" />
              </div>
              Save 80% time
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <FiCreditCard className="h-4 w-4 text-blue-600" />
              </div>
              No credit card
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <FiZap className="h-4 w-4 text-purple-600" />
              </div>
              2 free RFPs
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="https://app.scalerfp.com/auth/sign-up"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Started Free
              <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl font-medium text-lg hover:border-purple-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FiCalendar className="h-5 w-5" />
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </section>

      <ScheduleDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  );
}