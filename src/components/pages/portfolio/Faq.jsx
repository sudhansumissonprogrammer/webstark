import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: "How long does it take to create a portfolio?",
    answer: "Typically 2-4 weeks depending on the complexity and amount of content. Simple portfolios take 2-3 weeks, while complex interactive portfolios may take 3-4 weeks."
  },
  {
    question: "Can I update my portfolio content myself?",
    answer: "Yes! We build portfolios with easy-to-use content management systems that allow you to add new projects, update information, and manage your content."
  },
  {
    question: "Do you help with content creation?",
    answer: "We provide guidance on content structure and can help with copywriting. However, you'll need to provide your work samples, images, and project details."
  },
  {
    question: "Will my portfolio work on mobile devices?",
    answer: "Absolutely! All our portfolios are fully responsive and optimized for mobile devices, tablets, and desktops for the best user experience."
  },
  {
    question: "Can you integrate social media and contact forms?",
    answer: "Yes, we include social media integration, contact forms, and can add features like newsletter signup, testimonials, and client galleries."
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
            Portfolio <span className="gradient-text">FAQ</span>
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