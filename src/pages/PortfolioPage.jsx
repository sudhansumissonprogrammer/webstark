import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/portfolio/Hero';
import PortfolioTypes from '@/components/pages/portfolio/PortfolioTypes';
import Benefits from '@/components/pages/portfolio/Benefits';
import Process from '@/components/pages/portfolio/Process';
import FeaturesList from '@/components/pages/portfolio/FeaturesList';
import Showcase from '@/components/pages/portfolio/Showcase';
import Faq from '@/components/pages/portfolio/Faq';
import Cta from '@/components/pages/shared/Cta';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Professional Portfolio Creation Services | Personal Branding | DigitalCraft</title>
        <meta name="description" content="Create stunning professional portfolios in Bhubaneswar. Showcase your work with interactive galleries, personal branding, and mobile-optimized designs." />
      </Helmet>
      <Hero />
      <PortfolioTypes />
      <Benefits />
      <Process />
      <FeaturesList />
      <Showcase />
      <Faq />
      <Cta 
        title="Ready to Showcase Your Work?"
        description="Create a stunning portfolio that represents your unique style and attracts the right opportunities. Let's build something amazing together."
        primaryButtonText="Create My Portfolio"
        secondaryButtonText="View Examples"
        secondaryButtonLink="/work"
      />
    </>
  );
};

export default PortfolioPage;