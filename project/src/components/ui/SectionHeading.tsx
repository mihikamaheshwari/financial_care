import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className={`mb-3 ${light ? 'text-white' : 'text-primary'}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'} max-w-2xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-accent mt-4 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionHeading;