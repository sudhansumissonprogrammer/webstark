import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';

const PortfolioCreationPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio Creation - Webstark</title>
        <meta name="description" content="Professional portfolio creation services by webstark. Showcase your work with impact." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white">Portfolio Creation</h1>
        <p className="text-xl text-center text-gray-400 mt-4">This page is under construction.</p>
      </div>
    </PageTransition>
  );
};

export default PortfolioCreationPage;