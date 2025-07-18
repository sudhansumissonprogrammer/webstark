import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/pages/contact/Hero';
import ContactInfo from '@/components/pages/contact/ContactInfo';
import ContactForm from '@/components/pages/contact/ContactForm';
import MapSection from '@/components/pages/contact/MapSection';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact webstarkt | Get Quote | Web Development Services Bhubaneswar</title>
        <meta name="description" content="Contact DigitalCraft for web development, e-commerce, and portfolio services in Bhubaneswar. Get a free quote and consultation for your digital project." />
      </Helmet>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
    </>
  );
};

export default ContactPage;