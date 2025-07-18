import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleGetQuote = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "Quote system isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleViewWork = () => {
    toast({
      title: "🚧 Portfolio Loading!",
      description: "Full portfolio isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <div className="absolute inset-0 geometric-pattern"></div>
      
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/2 right-20 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Ideas into{' '}
            <span className="gradient-text">Digital Experiences</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft modern, animated websites and e-commerce solutions that captivate your audience 
            and drive exceptional results in Bhubaneswar and beyond.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
  asChild
  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 pulse-glow"
>
  <a
    href="https://wa.me/919692282485?text=Hi,%20I%27m%20interested%20in%20your%20services!"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start Your Project
    <ArrowRight className="ml-2 h-5 w-5" />
  </a>
</Button>
            
            
            <Button
  asChild
  variant="outline"
  className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
>
  <a href="work">
    View Our Work
  </a>
</Button>
            
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="scroll-indicator">
            <ChevronDown className="h-8 w-8 text-cyan-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;