import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-2/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to achieve financial clarity?
            </h2>
            <p className="text-neutral-200 text-lg max-w-2xl">
              Get expert financial guidance tailored to your unique needs. Contact us today for a consultation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-neutral-100 font-medium"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;