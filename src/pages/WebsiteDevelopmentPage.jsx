import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/website-dev/Hero';
import Benefits from '@/components/pages/website-dev/Benefits';
import Process from '@/components/pages/website-dev/Process';
import Features from '@/components/pages/website-dev/Features';
import CaseStudies from '@/components/pages/website-dev/CaseStudies';
import Faq from '@/components/pages/website-dev/Faq';
import Cta from '@/components/pages/shared/Cta';

const WebsiteDevelopmentPage = () => {
  return (
    <>
      <Helmet>
        <title>Custom Website Development Services | DigitalCraft Bhubaneswar</title>
        <meta name="description" content="Professional custom website development services in Bhubaneswar. Modern, responsive, SEO-optimized websites that drive results. Get your free quote today!" />
      </Helmet>
      <Hero />
      <Benefits />
      <Process />
      <Features />
      <CaseStudies />
      <Faq />
      <Cta 
        title="Ready to Build Your Dream Website?"
        description="Let's create a website that perfectly represents your brand and drives real results. Get started with a free consultation today."
        primaryButtonText="Get Free Quote"
        secondaryButtonText="Schedule Consultation"
        secondaryButtonLink="/contact"
      />
    </>
  );
};

export default WebsiteDevelopmentPage;