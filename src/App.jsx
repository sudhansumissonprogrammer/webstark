import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import WebsiteDevelopmentPage from "@/pages/WebsiteDevelopmentPage";
import EcommercePage from "@/pages/EcommercePage";
import PortfolioCreationPage from "@/pages/PortfolioCreationPage";
import AboutPage from "@/pages/AboutPage";
import WorkPage from "@/pages/WorkPage";
import ContactPage from "@/pages/ContactPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>WEBSTARK - Digital Experiences</title>
        <meta name="description" content="Transforming Ideas into Digital Experiences in Bhubaneswar. We specialize in custom website development, e-commerce solutions, and professional portfolio creation." />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
      <Toaster />
    </>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
        <Route path="/services/ecommerce" element={<EcommercePage />} />
        <Route path="/services/portfolio-creation" element={<PortfolioCreationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work"
        element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;