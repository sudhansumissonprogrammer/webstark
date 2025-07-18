import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfoData = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'hello@webstark.in',
    description: 'Send us an email anytime',
    href: 'mailto:hello@webstark.in'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+91 9692282485',
    description: 'Mon-Fri from 9am to 6pm',
    href: 'tel:+919692282485'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: 'Bhubaneswar, Odisha, India',
    description: 'Come say hello at our office',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: 'Mon - Fri: 9:00 AM - 6:00 PM',
    description: 'Saturday: 10:00 AM - 4:00 PM',
    href: '#'
  }
];

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfoData.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {info.title}
              </h3>
              <div className="text-cyan-400 font-medium mb-2">
                {info.details}
              </div>
              <p className="text-gray-300 text-sm">
                {info.description}
              </p>
              {info.href !== '#' && (
                <a
                  href={info.href}
                  className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Contact Now →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;