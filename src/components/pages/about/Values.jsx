import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Zap, Globe, Star } from 'lucide-react';

const valuesData = [
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: 'We put our clients at the center of everything we do, ensuring their vision becomes reality.'
  },
  {
    icon: Zap,
    title: 'Innovation & Excellence',
    description: 'We stay ahead of trends and use cutting-edge technology to deliver exceptional results.'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'We maintain international quality standards while understanding local market needs.'
  },
  {
    icon: Star,
    title: 'Continuous Growth',
    description: 'We believe in continuous learning and improvement to serve our clients better.'
  }
];

const Values = () => {
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
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do and shape our relationships with clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;