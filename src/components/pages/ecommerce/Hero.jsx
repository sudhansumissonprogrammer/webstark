import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleGetQuote = () => {
    toast({
      title: "🚧 Quote System Coming Soon!",
      description: "E-commerce quote functionality isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactUs = () => {
    toast({
      title: "🚧 Contact Form Loading!",
      description: "Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="relative pt-24 pb-20 hero-bg overflow-hidden">
      <div className="absolute inset-0 geometric-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight text-shadow">
              Powerful <span className="gradient-text">E-commerce Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your business with robust, secure online stores designed for maximum 
              sales conversion. From product catalogs to payment processing, we build 
              e-commerce platforms that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Store
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                onClick={handleContactUs}
                className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-lg"
              >
                View Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 floating-animation">
              <img 
                className="w-full h-auto rounded-xl" 
                alt="E-commerce platform showcase"
               src="https://images.unsplash.com/photo-1641833278434-50f92b93d65a" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;