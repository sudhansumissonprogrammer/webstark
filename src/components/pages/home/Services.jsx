import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, User, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-performance websites tailored to your unique brand identity with cutting-edge technology.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    link: '/website-development'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Robust, secure online stores designed for maximum sales conversion and user engagement.',
    features: ['Payment Integration', 'Inventory Management', 'Mobile Optimized', 'Analytics'],
    link: '/ecommerce'
  },
  {
    icon: User,
    title: 'Portfolio Creation',
    description: 'Dynamic, interactive portfolios that showcase your work with elegance and professional impact.',
    features: ['Interactive Gallery', 'Personal Branding', 'Contact Integration', 'Social Media'],
    link: '/portfolio'
  }
];

const Services = () => {
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card glass-effect rounded-2xl p-8 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={service.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;