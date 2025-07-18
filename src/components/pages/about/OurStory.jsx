import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
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
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                DigitalCraft was born from a simple belief: every business deserves a digital presence 
                that truly represents their vision and drives meaningful results. Founded in 2021 in 
                the heart of Bhubaneswar, we started with a mission to bridge the gap between 
                cutting-edge technology and local business needs.
              </p>
              <p className="text-lg">
                What began as a small team of passionate developers has grown into a full-service 
                digital agency. We've had the privilege of working with startups, established 
                businesses, and creative professionals, helping them transform their ideas into 
                powerful digital experiences.
              </p>
              <p className="text-lg">
                Today, we're proud to be recognized as one of Bhubaneswar's leading web development 
                agencies, but our core values remain unchanged: quality, innovation, and putting 
                our clients first in everything we do.
              </p>
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
                alt="DigitalCraft team working together"
               src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;