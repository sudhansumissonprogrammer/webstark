import React from 'react';
import { motion } from 'framer-motion';

const processData = [
  {
    step: '01',
    title: 'Strategy & Planning',
    description: 'We analyze your business model, target audience, and competition to create a winning strategy.'
  },
  {
    step: '02',
    title: 'Design & UX',
    description: 'Our designers create conversion-focused designs that provide exceptional user experiences.'
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'Expert development with payment gateways, inventory management, and third-party integrations.'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Comprehensive testing followed by launch and ongoing optimization for maximum performance.'
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
            Our E-commerce <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to launch, we follow a proven process that ensures your success
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