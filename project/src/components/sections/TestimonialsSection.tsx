import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What our clients say about our services"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;