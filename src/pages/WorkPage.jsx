import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Cta from '@/components/pages/shared/Cta';

const filters = ['All', 'Website Development', 'E-commerce', 'Portfolio'];

const projects = [
  {
    id: 1,
    title: 'Shopping Website',
    category: 'E-commerce',
    description: 'eCommerce website with modern design and seamless user experience and payment integration',
    image: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
    link: 'https://shankharva.com/',
    tags: ['E-commerce', 'Payment Gateway', 'Modern Design'],
    results: ['Seamless payments', 'Modern UI']
  },
  {
    id: 2,
    title: 'Gym Website',
    category: 'Website Development',
    description: 'Gym website with modern design and seamless user experience and payment integration',
    image: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
    link: 'https://powerpulse-fitness.vercel.app/',
    tags: ['Fitness', 'Booking', 'Modern Design'],
    results: ['Easy booking', 'Responsive design']
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    category: 'Portfolio',
    description: 'Interactive creative portfolio showcasing artistic work and projects',
    image: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
    link: 'https://your-demo-restaurant.com',
    tags: ['Portfolio', 'Animation', 'Gallery'],
    results: ['Artistic showcase', 'Smooth animations']
  },
  {
    id: 4,
    title: 'Tech Startup Platform',
    category: 'Website Development',
    description: 'Innovative tech startup website with modern animations and features',
    image: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
    link: 'https://kharavelafitness.lovable.app/',
    tags: ['Startup', 'Tech', 'Animations'],
    results: ['Modern features', 'Animated UI']
  }
];

const WorkPage = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Our Work & Portfolio | DigitalCraft Projects | Web Development Showcase</title>
        <meta name="description" content="Explore DigitalCraft's portfolio of successful web development, e-commerce, and portfolio projects. See our work and results for clients in Bhubaneswar and beyond." />
      </Helmet>

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
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects and see how we've helped businesses 
              transform their digital presence with innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'border-white/20 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300 block"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-600/20 relative overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-cyan-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-cyan-400 text-sm">Key Results:</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-xs text-gray-300">
                        • {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Cta 
        title="Ready to Start Your Project?"
        description="Let's discuss your vision and create something amazing together. Join our list of successful clients and transform your digital presence."
        primaryButtonText="Start Your Project"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default WorkPage;