import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const portfolioFeaturesData = [
  'Custom Design & Layout',
  'Interactive Galleries',
  'Mobile Optimization',
  'SEO Optimization',
  'Contact Integration',
  'Social Media Links',
  'Blog Functionality',
  'Client Testimonials',
  'Project Case Studies',
  'Download Resume/CV',
  'Analytics Integration',
  'Fast Loading Speed'
];

const FeaturesList = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Everything You Need to <span className="gradient-text">Showcase Your Work</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our portfolio websites come with all the features you need to present 
              your work professionally and attract the right opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioFeaturesData.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8">
              <img 
                className="w-full h-auto rounded-xl" 
                alt="Portfolio features showcase"
               src="https://images.unsplash.com/photo-1520778166-93b06a2ce71a" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;