import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const portfolioItems = [
  {
    title: 'Shopping Website',
    category: 'ecommerce',
    image: 'eCommerce website with modern design and seamless user experience and payment integration',
    link: 'https://shankharva.com/'

  },
  {
    title: 'Gym website',
    category: 'website Development',
    image: 'gym website with modern design and seamless user experience and payment integration',
    link: 'https://powerpulse-fitness.vercel.app/'
  },
  {
    title: 'Creative Portfolio',
    category: 'Portfolio',
    image: 'Interactive creative portfolio showcasing artistic work and projects',
    link: 'https://your-demo-restaurant.com'
  },
  {
    title: 'Tech Startup Platform',
    category: 'Website Development',
    image: 'Innovative tech startup website with modern animations and features',
    link: 'https://kharavelafitness.lovable.app/'
  }
];

const FeaturedWork = () => {
  const { toast } = useToast();

  const handleViewWork = () => {
    toast({
      title: "🚧 Portfolio Loading!",
      description: "Full portfolio isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest work and the exceptional results we deliver for our clients
          </p>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {portfolioItems.map((item, index) => (
    <motion.a
      key={item.title}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="portfolio-item glass-effect rounded-2xl overflow-hidden group cursor-pointer block"
    >
      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          alt={item.title}
          src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      <div className="p-6">
        <div className="text-sm text-cyan-400 font-medium mb-2">{item.category}</div>
        <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
        <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium">
          View Project
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </motion.a>
  ))}
</div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            onClick={handleViewWork}
            variant="outline"
            className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
