import React from 'react';
import { motion } from 'framer-motion';

const milestonesData = [
  {
    year: '2021',
    title: 'Company Founded',
    description: 'Started DigitalCraft with a vision to transform digital experiences in Bhubaneswar.'
  },
  {
    year: '2022',
    title: 'First 50 Projects',
    description: 'Successfully completed 50 projects, establishing our reputation for quality and innovation.'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received "Best Web Development Agency" award from Odisha Digital Awards.'
  },
  {
    year: '2024',
    title: 'Expansion & Growth',
    description: 'Expanded services and team, now serving clients across India and internationally.'
  }
];

const Timeline = () => {
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
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key milestones in our growth and evolution as a digital agency
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500"></div>
          
          <div className="space-y-12">
            {milestonesData.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="text-2xl font-bold gradient-text mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;