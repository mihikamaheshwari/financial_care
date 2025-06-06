import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, value: "650+", label: "Happy Clients" },
    { icon: <Clock className="w-8 h-8 text-primary" />, value: "18", label: "Years Experience" },
    { icon: <Award className="w-8 h-8 text-primary" />, value: "100%", label: "Client Satisfaction" },
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, value: "100%", label: "Success Rate" }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              title="Meet CA Lalit Kabra" 
              subtitle="Director of Financial Care with extensive experience in financial services."
            />
            
            <p className="mb-6 text-neutral-600">
              CA Lalit Kabra brings over 18 years of expertise in financial advisory, tax planning, and business auditing. 
              His commitment to excellence and client satisfaction has made Financial Care a trusted name in the industry.
            </p>
            
            <p className="mb-8 text-neutral-600">
              With a deep understanding of financial regulations and market trends, he helps clients navigate complex 
              financial landscapes and achieve their goals with confidence.
            </p>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
          
          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-3">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-primary-dark mb-1">{stat.value}</h3>
                <p className="text-neutral-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;