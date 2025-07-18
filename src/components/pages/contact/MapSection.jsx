import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Visit Our <span className="gradient-text">Office</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Located in the heart of Bhubaneswar, we're always happy to meet in person
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                webstark Office
              </h3>
              <p className="text-gray-300 mb-4">
                Bhubaneswar, Odisha, India
              </p>
              <p className="text-sm text-gray-400">
                Interactive map integration coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;