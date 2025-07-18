import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Globe, Star, Heart } from 'lucide-react';

const featuresData = [
  {
    icon: Eye,
    title: 'Visual Impact',
    description: 'Stunning designs that make your work stand out and leave lasting impressions.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Reach clients and opportunities worldwide with a professional online presence.'
  },
  {
    icon: Star,
    title: 'Personal Branding',
    description: 'Build a strong personal brand that reflects your unique style and expertise.'
  },
  {
    icon: Heart,
    title: 'Client Connection',
    description: 'Connect with your audience through compelling storytelling and engaging content.'
  }
];

const Benefits = () => {
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
            Why You Need a <span className="gradient-text">Professional Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stand out from the competition and showcase your expertise with a stunning online presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-10 w-10 text-white" />
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

export default Benefits;