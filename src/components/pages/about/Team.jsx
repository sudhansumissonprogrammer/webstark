import React from 'react';
import { motion } from 'framer-motion';

const teamData = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & Lead Developer',
    description: 'Full-stack developer with 5+ years of experience in modern web technologies.',
    image: 'Professional headshot of Rajesh Kumar, founder and lead developer'
  },
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    description: 'Creative designer specializing in user experience and modern interface design.',
    image: 'Professional headshot of Priya Sharma, UI/UX designer'
  },
  {
    name: 'Amit Patel',
    role: 'E-commerce Specialist',
    description: 'Expert in e-commerce platforms and online business optimization strategies.',
    image: 'Professional headshot of Amit Patel, e-commerce specialist'
  }
];

const Team = () => {
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
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The talented individuals behind DigitalCraft's success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <img 
                  className="w-20 h-20 rounded-full object-cover" 
                  alt={member.name}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {member.name}
              </h3>
              <div className="text-cyan-400 font-medium mb-4">
                {member.role}
              </div>
              <p className="text-gray-300 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;