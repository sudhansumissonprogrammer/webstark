import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/home/Hero';
import Services from '@/components/pages/home/Services';
import FeaturedWork from '@/components/pages/home/FeaturedWork';
import WhyChooseUs from '@/components/pages/home/WhyChooseUs';
import Testimonials from '@/components/pages/home/Testimonials';
import Cta from '@/components/pages/shared/Cta';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DigitalCraft - Stylish Web & E-commerce Development Services | Bhubaneswar</title>
        <meta name="description" content="Transform your digital presence with DigitalCraft's modern, animated web development and e-commerce solutions in Bhubaneswar. Custom websites, online stores, and professional portfolios." />
      </Helmet>
      <Hero />
      <Services />
      <FeaturedWork />
      <WhyChooseUs />
      <Testimonials />
      <Cta 
        title="Ready to Transform Your Digital Presence?"
        description="Let's discuss your project and create something amazing together. Get started with a free consultation today."
        primaryButtonText="Get Free Quote"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default HomePage;