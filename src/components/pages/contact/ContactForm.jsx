import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const services = [
  'Website Development',
  'E-commerce Solutions',
  'Portfolio Creation',
  'Custom Development',
  'Branding & Design',
  'Other'
];

const budgetRanges = [
  'Under ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000 - ₹5,00,000',
  'Above ₹5,00,000'
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Contact Form Coming Soon!",
      description: "Form submission isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  }; 

  const handleScheduleCall = () => {
    toast({
      title: "🚧 Scheduling System Loading!",
      description: "Call scheduling isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleWhatsApp = () => {
    toast({
      title: "🚧 WhatsApp Integration Coming!",
      description: "WhatsApp chat isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours 
              with a detailed proposal for your project.
            </p>

            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Quick Actions</h3>
              <div className="space-y-4">
               
                <a
  href="https://wa.me/919692282485?text=Hi,%20I%27m%20interested%20in%20your%20services!"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
>
  <MessageCircle className="mr-3 h-5 w-5" />
  WhatsApp Chat
</a>
               
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">1</span></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">We Review Your Request</h4>
                    <p className="text-gray-300 text-sm">Our team reviews your project details within 2-4 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">2</span></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Initial Consultation</h4>
                    <p className="text-gray-300 text-sm">We schedule a call to discuss your vision and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">3</span></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Detailed Proposal</h4>
                    <p className="text-gray-300 text-sm">You receive a comprehensive proposal with timeline and pricing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white font-bold text-sm">4</span></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Project Kickoff</h4>
                    <p className="text-gray-300 text-sm">Once approved, we begin bringing your vision to life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-4">Response Time</h3>
              <p className="text-gray-300 mb-4">We typically respond to all inquiries within 2-4 hours during business hours.</p>
              <div className="text-cyan-400 font-semibold">Average Response Time: 2 hours</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;