import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Camera, Briefcase, User } from 'lucide-react';

const portfolioTypesData = [
  {
    icon: Palette,
    title: 'Creative Portfolios',
    description: 'Showcase your artistic work with stunning visual galleries and interactive presentations.',
    features: ['Interactive Galleries', 'Lightbox Effects', 'Video Integration', 'Social Sharing']
  },
  {
    icon: Camera,
    title: 'Photography Portfolios',
    description: 'Professional photography websites with high-resolution image displays and client galleries.',
    features: ['High-Res Display', 'Client Galleries', 'Watermarking', 'Print Shop Integration']
  },
  {
    icon: Briefcase,
    title: 'Professional Portfolios',
    description: 'Business portfolios for consultants, freelancers, and professionals to showcase expertise.',
    features: ['Case Studies', 'Testimonials', 'Resume Integration', 'Contact Forms']
  },
  {
    icon: User,
    title: 'Personal Brands',
    description: 'Personal branding websites that tell your story and establish your online presence.',
    features: ['Personal Branding', 'Blog Integration', 'Social Media', 'About Pages']
  }
];

const PortfolioTypes = () => {
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
            Portfolio Types We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tailored portfolio solutions for every profession and creative field
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioTypesData.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <type.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                {type.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {type.description}
              </p>
              <div className="space-y-2">
                {type.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTypes;