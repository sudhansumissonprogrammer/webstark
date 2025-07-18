import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically 2-6 weeks depending on complexity. Simple websites take 2-3 weeks, while complex sites with custom features may take 4-6 weeks."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages including updates, security monitoring, backups, and technical support."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices."
  },
  {
    question: "Can I update the content myself?",
    answer: "Yes, we build websites with user-friendly content management systems that allow you to easily update content, images, and pages."
  },
  {
    question: "What's included in the development cost?",
    answer: "Our packages include design, development, basic SEO setup, mobile optimization, contact forms, and 30 days of free support."
  }
];

const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;