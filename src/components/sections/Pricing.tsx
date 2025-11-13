'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const plans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for trying out ScaleRFP',
    features: [
      '2 RFPs per month',
      '10 knowledge base docs',
      '1 user',
      'AI-generated responses',
      'All export formats',
    ],
    cta: 'Start Free',
    href: 'https://app.scalerfp.com/auth/sign-up',
    popular: false,
  },
  {
    name: 'Starter',
    price: '3999',
    description: 'Great for small teams',
    features: [
      '10 RFPs per month',
      '50 knowledge base docs',
      'Unlimited users',
      'AI-generated responses',
      'Instant AI revamp/rephrase',
      'All export formats',
      'Priority email support',
    ],
    cta: 'Start Starter',
    href: 'https://app.scalerfp.com/auth/sign-up',
    popular: false,
  },
  {
    name: 'Growth',
    price: '7999',
    description: 'For growing teams',
    features: [
      '25 RFPs per month',
      '150 knowledge base docs',
      'Unlimited users',
      'AI-generated responses',
      'Instant AI revamp/rephrase',
      'All export formats',
      'Priority support',
    ],
    cta: 'Start Growth',
    href: 'https://app.scalerfp.com/auth/sign-up',
    popular: true,
  },
  {
    name: 'Pro',
    price: '1599',
    description: 'For high-volume teams',
    features: [
      '100 RFPs per month',
      '500 knowledge base docs',
      'Unlimited users',
      'AI-generated responses',
      'Instant AI revamp/rephrase',
      'All export formats',
      'Dedicated support',
    ],
    cta: 'Start Pro',
    href: 'https://app.scalerfp.com/auth/sign-up',
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={ref} className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-medium mb-6">
            Simple,{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you need more. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-lg z-10">
                  Most Popular
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl p-6 border-2 transition-all duration-500 ${
                  plan.popular
                    ? 'border-purple-300 bg-white shadow-2xl scale-105'
                    : 'border-gray-200 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">INR {plan.price}</span>
                    {plan.price !== '0' && <span className="text-gray-600 text-sm">/mo</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <FiArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 group"
          >
            View detailed pricing comparison
            <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}