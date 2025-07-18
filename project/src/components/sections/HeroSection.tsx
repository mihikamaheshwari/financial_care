import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../config/images';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-primary-dark to-primary text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${images.hero.background})` }}
      ></div>
      
      {/* Enhanced Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      
      {/* Enhanced Content */}
      <div className="container relative z-20 h-full flex flex-col justify-center items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring" }}
            >
              <span className="relative inline-block drop-shadow-2xl">
                Financial Care
              </span>
            </motion.h1>
            
            {/* Tagline positioned close */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Finance your dreams with confidence and expertise
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/services" className="btn bg-white text-primary hover:bg-neutral-100 font-medium text-lg px-8 py-4 shadow-2xl">
                  Our Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-4">
                  Contact Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Logo positioned slightly left and higher up */}
          <motion.div
            className="flex justify-start items-center pl-8 -mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 60,
              damping: 20
            }}
          >
            <motion.img 
              src="/images/logo/logo.png" 
              alt="Financial Care Logo" 
              className="h-56 w-auto sm:h-72 md:h-80 lg:h-96 xl:h-112 drop-shadow-2xl"
              animate={{ 
                opacity: [0.9, 1, 0.9],
                y: [0, -8, 0],
              }}
              transition={{ 
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            />
          </motion.div>
        </div>
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