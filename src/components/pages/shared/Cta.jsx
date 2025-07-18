import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Cta = ({ title, description, primaryButtonText, secondaryButtonText, secondaryButtonLink }) => {
  const { toast } = useToast();

  const handlePrimaryAction = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
            {title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handlePrimaryAction}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                to={secondaryButtonLink}
                className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-200"
              >
                {secondaryButtonText} →
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;