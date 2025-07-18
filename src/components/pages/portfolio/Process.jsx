import React from 'react';
import { motion } from 'framer-motion';

const processData = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn about your work, style, and goals to create a portfolio that represents you perfectly.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Custom design that showcases your work beautifully while maintaining your unique brand identity.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Interactive development with smooth animations and optimized performance across all devices.'
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Launch your portfolio and provide training on how to update and maintain your content.'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our Portfolio <span className="gradient-text">Creation Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collaborative approach that ensures your portfolio perfectly represents your unique style
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < processData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;