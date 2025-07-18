import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, Users, Clock } from 'lucide-react';

const featuresData = [
  {
    icon: Zap,
    title: 'AI-Powered Efficiency',
    description: 'Leveraging cutting-edge AI tools to deliver projects faster without compromising quality.'
  },
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Our designs have been recognized for their innovation and user experience excellence.'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We prioritize your vision and goals, ensuring every project exceeds expectations.'
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    description: 'Fast turnaround times without sacrificing the quality and attention to detail you deserve.'
  }
];

const WhyChooseUs = () => {
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
            Why Choose <span className="gradient-text">DigitalCraft</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with creative excellence to deliver outstanding results
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

export default WhyChooseUs;