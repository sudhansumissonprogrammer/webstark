import React from 'react';
import { motion } from 'framer-motion';

const processData = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your vision, goals, and requirements to understand your unique needs.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our designers create stunning mockups and prototypes tailored to your brand.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Expert developers bring your design to life with clean, efficient code.'
  },
  {
    step: '04',
    title: 'Launch',
    description: 'We deploy your website and provide ongoing support for optimal performance.'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Our Development <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time and exceeds expectations
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