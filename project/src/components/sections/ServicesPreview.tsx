import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const ServicesPreview: React.FC = () => {
  return (
    <section className="section bg-background">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive financial solutions tailored to your needs"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.slice(0, 8).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;