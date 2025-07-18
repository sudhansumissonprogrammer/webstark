import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Shield, BarChart3, Smartphone, Users } from 'lucide-react';

const featuresData = [
  {
    icon: ShoppingCart,
    title: 'Advanced Shopping Cart',
    description: 'Intuitive cart with save for later, quick checkout, and abandoned cart recovery.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payment Gateway',
    description: 'Multiple payment options including cards, wallets, and buy-now-pay-later solutions.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive dashboard with sales analytics, customer insights, and performance metrics.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SSL encryption, PCI compliance, and advanced fraud protection for safe transactions.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Commerce',
    description: 'Optimized mobile experience with app-like performance and touch-friendly interface.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Complete CRM with customer profiles, order history, and personalized experiences.'
  }
];

const Features = () => {
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
            Complete <span className="gradient-text">E-commerce Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to run a successful online business, all in one platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;