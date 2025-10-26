'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does the AI generate responses?',
    answer: 'Our AI analyzes your uploaded documents and uses advanced language models to generate contextually accurate responses. Each answer includes a trust score so you know how confident the AI is.',
  },
  {
    question: 'What file formats do you support?',
    answer: 'We support PDF, DOCX, and TXT files for both RFPs and knowledge base documents. We can extract questions from any text-based RFP format.',
  },
  {
    question: 'Can I edit AI-generated responses?',
    answer: 'Absolutely! Every response can be edited before export. Think of our AI as a smart first draft that saves you 80% of the work.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes. We use official OpenAI and Anthropic Claude APIs with enterprise-grade encryption. Your data is never used to train AI models or shared with third parties.',
  },
  {
    question: 'What happens if I exceed my RFP limit?',
    answer: 'You can upgrade your plan anytime. On the Free plan, you\'ll need to upgrade to process more than 2 RFPs. Pro users get 50 RFPs per month.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 14-day money-back guarantee on all paid plans. If you\'re not satisfied, we\'ll refund you in full, no questions asked.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="relative py-32 bg-gradient-to-b from-purple-50/30 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-medium mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ScaleRFP
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    {openIndex === index ? (
                      <FiMinus className="h-4 w-4 text-white" />
                    ) : (
                      <FiPlus className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}