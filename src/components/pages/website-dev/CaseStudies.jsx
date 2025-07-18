import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const caseStudiesData = [
  {
    title: 'Tech Startup Platform',
    description: 'Modern SaaS website with interactive demos and conversion optimization.',
    results: ['300% increase in sign-ups', '50% faster loading time', '95% mobile score'],
    image: 'Modern tech startup website with sleek design and interactive elements'
  },
  {
    title: 'Restaurant Chain Website',
    description: 'Multi-location restaurant website with online ordering and reservations.',
    results: ['200% increase in online orders', '40% more reservations', '4.9/5 user rating'],
    image: 'Elegant restaurant website with menu display and reservation system'
  }
];

const CaseStudies = () => {
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients - see how our websites have transformed businesses
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