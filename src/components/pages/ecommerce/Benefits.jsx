import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Zap, Shield } from 'lucide-react';

const benefitsData = [
  {
    icon: TrendingUp,
    title: 'Increase Sales',
    description: 'Optimized conversion funnels and user experience designed to maximize revenue.',
    stat: '300% Average Sales Increase'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Multi-currency, multi-language support to sell worldwide.',
    stat: '50+ Countries Supported'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast loading speeds for better user experience and SEO.',
    stat: '< 2s Loading Time'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-level security with 99.9% uptime guarantee.',
    stat: '99.9% Uptime'
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
            Why Choose Our <span className="gradient-text">E-commerce Platform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for performance, designed for conversion, and optimized for growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {benefit.description}
              </p>
              <div className="text-cyan-400 font-semibold text-sm">
                {benefit.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;