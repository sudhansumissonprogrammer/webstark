import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Rajesh Kumar',
    company: 'TechStart Solutions',
    text: 'DigitalCraft transformed our online presence completely. The website they built increased our conversions by 300%!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    company: 'Creative Studio',
    text: 'The portfolio they created for me is absolutely stunning. I\'ve received more client inquiries than ever before.',
    rating: 5
  },
  {
    name: 'Amit Patel',
    company: 'E-Shop India',
    text: 'Our e-commerce platform is now running smoothly with excellent user experience. Sales have doubled!',
    rating: 5
  }
];

const Testimonials = () => {
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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our satisfied clients have to say
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-cyan-400">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;