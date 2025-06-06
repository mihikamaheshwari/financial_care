import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialType } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Quote className="text-primary/20 w-10 h-10 mb-4" />
      <p className="text-neutral-700 mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
          <span className="text-primary font-semibold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
          <p className="text-neutral-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;