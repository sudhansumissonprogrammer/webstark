import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const showcaseItemsData = [
  {
    title: 'Artist Portfolio',
    category: 'Creative',
    description: 'Interactive portfolio showcasing digital art with smooth animations and gallery features.',
    image: 'Modern artist portfolio website with interactive gallery and artwork showcase'
  },
  {
    title: 'Photographer Website',
    category: 'Photography',
    description: 'Professional photography portfolio with client galleries and booking system.',
    image: 'Professional photographer portfolio with stunning image galleries and client booking'
  },
  {
    title: 'Designer Showcase',
    category: 'Design',
    description: 'Creative designer portfolio with case studies and interactive project presentations.',
    image: 'Creative designer portfolio showcasing projects with interactive case studies'
  },
  {
    title: 'Consultant Profile',
    category: 'Professional',
    description: 'Business consultant portfolio with testimonials and service offerings.',
    image: 'Professional consultant portfolio with testimonials and service showcase'
  }
];

const Showcase = () => {
  const { toast } = useToast();

  const handleViewExamples = () => {
    toast({
      title: "🚧 Portfolio Examples Loading!",
      description: "Portfolio examples aren't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

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
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Examples of stunning portfolios we've created for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItemsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleViewExamples}
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={item.title}
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="p-6">
                <div className="text-sm text-cyan-400 font-medium mb-2">{item.category}</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;