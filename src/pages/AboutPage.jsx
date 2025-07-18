import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/about/Hero';
import Stats from '@/components/pages/about/Stats';
import OurStory from '@/components/pages/about/OurStory';
import Values from '@/components/pages/about/Values';
import Team from '@/components/pages/about/Team';
import Timeline from '@/components/pages/about/Timeline';
import MissionVision from '@/components/pages/about/MissionVision';
import Cta from '@/components/pages/shared/Cta';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About DigitalCraft | Web Development Team Bhubaneswar | Our Story</title>
        <meta name="description" content="Learn about DigitalCraft's journey, team, and values. Professional web development and e-commerce solutions in Bhubaneswar with a client-centric approach." />
      </Helmet>
      <Hero />
      
      {newFunction()}
      <Values />
      
      
      
      <MissionVision />
      <Cta 
        title="Ready to Work with Us?"
        description="Let's discuss your project and see how we can help transform your digital presence. We're excited to be part of your success story."
        primaryButtonText={newFunction_1()}
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/work"
      />
    </>
  );

  function newFunction_1() {
    return newFunction_2();
  }

  
  function newFunction_2() {
  return (
    <a
      href="https://wa.me/919692282485?text=Hi,%20I%27m%20interested%20in%20joining%20your%20gym!%20Please%20tell%20me%20more%20about%20your%20membership%20plans."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      whatsapp    </a>
  );
}

  function newFunction() {
    return 'Get in Touch';
  }

  function newFunction() {
    return <OurStory />;
  }
};

export default AboutPage;