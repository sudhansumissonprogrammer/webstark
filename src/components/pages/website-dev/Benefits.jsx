import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Search, Shield } from 'lucide-react';

const benefitsData = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Expand your business reach with a professional online presence that works worldwide.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive websites that look perfect on all devices, from phones to desktops.'
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices to help your website rank higher in search results.'
  },
  {
    icon: Shield,
    title: 'Secure & Fast',
    description: 'Enterprise-level security and lightning-fast loading speeds for optimal performance.'
  }
];

const Benefits = () => {
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
            Why Choose Our <span className="gradient-text">Website Development</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver websites that not only look amazing but also perform exceptionally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;