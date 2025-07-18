import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const caseStudiesData = [
  {
    title: 'Fashion E-commerce Platform',
    description: 'Complete fashion marketplace with advanced filtering, wishlist, and social commerce features.',
    results: ['500% increase in online sales', '60% higher conversion rate', '40% increase in average order value'],
    image: 'Modern fashion e-commerce website with product gallery and shopping features'
  },
  {
    title: 'Electronics Store',
    description: 'Multi-vendor electronics platform with comparison tools and technical specifications.',
    results: ['300% growth in monthly revenue', '45% reduction in cart abandonment', '4.8/5 customer satisfaction'],
    image: 'Professional electronics e-commerce site with product comparisons and reviews'
  }
];

const CaseStudies = () => {
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
            E-commerce Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our e-commerce solutions have transformed businesses and driven exceptional growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                <img 
                  className="w-full h-full object-cover" 
                  alt={study.title}
                 src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
              </div>
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {study.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-400 mb-3">Results:</h4>
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;