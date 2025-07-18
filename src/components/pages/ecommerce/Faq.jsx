import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "How long does it take to build an e-commerce store?",
    answer: "Typically 4-8 weeks depending on complexity. Basic stores take 4-5 weeks, while advanced multi-vendor platforms may take 6-8 weeks."
  },
  {
    question: "Which payment gateways do you integrate?",
    answer: "We integrate all major payment gateways including Stripe, PayPal, Razorpay, and local payment methods based on your target market."
  },
  {
    question: "Can you migrate my existing store?",
    answer: "Yes! We provide complete migration services from platforms like Shopify, WooCommerce, Magento, and others with zero data loss."
  },
  {
    question: "Do you provide inventory management?",
    answer: "Absolutely! Our platform includes comprehensive inventory management with real-time tracking, low stock alerts, and automated reordering."
  },
  {
    question: "Is the platform mobile-optimized?",
    answer: "Yes, all our e-commerce stores are built mobile-first with responsive design and optimized for mobile commerce conversion."
  }
];

const Faq = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            E-commerce <span className="gradient-text">FAQ</span>
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