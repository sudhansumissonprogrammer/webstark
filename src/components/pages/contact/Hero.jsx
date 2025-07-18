import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 hero-bg overflow-hidden">
      <div className="absolute inset-0 geometric-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight text-shadow">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project and 
            create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;