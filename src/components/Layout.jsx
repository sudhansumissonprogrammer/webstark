import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;