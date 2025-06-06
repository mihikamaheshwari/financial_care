import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesPreview from '../components/sections/ServicesPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = ' CA Lalit Kabra';
  }, []);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;