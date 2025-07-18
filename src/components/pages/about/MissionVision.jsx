import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-3xl text-white mb-6">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To empower businesses and individuals with exceptional digital solutions that 
              drive growth, enhance user experiences, and create lasting value. We strive to 
              make cutting-edge web technology accessible and effective for everyone, from 
              startups to established enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display font-bold text-3xl text-white mb-6">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To become the leading digital transformation partner in Eastern India, known for 
              innovation, quality, and client success. We envision a future where every business 
              has access to world-class digital solutions that help them thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;