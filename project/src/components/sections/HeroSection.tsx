import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../config/images';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-primary-dark to-primary text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${images.hero.background})` }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Financial Care
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Finance your dreams 
            
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/services" className="btn bg-white text-primary hover:bg-neutral-100 font-medium">
              Our Services
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium">
              Contact Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FBE4D6"
            fillOpacity="1"
            d="M0,224L80,229.3C160,235,320,245,480,218.7C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;