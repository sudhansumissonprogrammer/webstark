import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/ecommerce/Hero';
import Benefits from '@/components/pages/ecommerce/Benefits';
import Features from '@/components/pages/ecommerce/Features';
import Process from '@/components/pages/ecommerce/Process';
import FeaturesList from '@/components/pages/ecommerce/FeaturesList';
import CaseStudies from '@/components/pages/ecommerce/CaseStudies';
import Faq from '@/components/pages/ecommerce/Faq';
import Cta from '@/components/pages/shared/Cta';

const EcommercePage = () => {
  return (
    <>
      <Helmet>
        <title>E-commerce Development Services | Online Store Solutions | DigitalCraft</title>
        <meta name="description" content="Professional e-commerce development services in Bhubaneswar. Custom online stores, payment integration, inventory management. Boost your online sales today!" />
      </Helmet>
      <Hero />
      <Benefits />
      <Features />
      <Process />
      <FeaturesList />
      <CaseStudies />
      <Faq />
      <Cta 
        title="Ready to Launch Your Online Store?"
        description="Transform your business with a powerful e-commerce platform designed for growth. Start selling online and reach customers worldwide."
        primaryButtonText="Start Your Store"
        secondaryButtonText="Schedule Demo"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default EcommercePage;