import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';
import CtaSection from '../components/sections/CtaSection';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { images, imageAlts } from '../config/images';

const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | Financial Care';
  }, []);

  // Helper functions to get service images
  const getServiceImage = (serviceId: number): string => {
    switch (serviceId) {
      case 1: return images.services.financialAdvisory;
      case 2: return images.services.wealthManagement;
      case 3: return images.services.mutualFunds;
      case 4: return images.services.pms;
      case 5: return images.services.sifAif;
      case 6: return images.services.taxPlanning;
      case 7: return images.services.homeLoan;
      case 8: return images.services.businessLoan;
      default: return images.placeholder.service;
    }
  };

  const getServiceImageAlt = (serviceId: number): string => {
    switch (serviceId) {
      case 1: return imageAlts.services.financialAdvisory;
      case 2: return imageAlts.services.wealthManagement;
      case 3: return imageAlts.services.mutualFunds;
      case 4: return imageAlts.services.pms;
      case 5: return imageAlts.services.sifAif;
      case 6: return imageAlts.services.taxPlanning;
      case 7: return imageAlts.services.homeLoan;
      case 8: return imageAlts.services.businessLoan;
      default: return 'Financial service';
    }
  };

  // Extended service details
  const serviceDetails = [
    {
      id: 1,
      features: [
        "Comprehensive financial planning and analysis",
        "Investment strategy development",
        "Risk assessment and management",
        "Retirement planning guidance",
        "Financial goal setting and monitoring"
      ]
    },
    {
      id: 2,
      features: [
        "Asset allocation and diversification",
        "Estate planning services",
        "Tax-efficient wealth strategies",
        "Family wealth management",
        "Legacy planning and wealth transfer"
      ]
    },
    {
      id: 3,
      features: [
        "Mutual fund selection and analysis",
        "SIP planning and management",
        "Fund performance monitoring",
        "Risk profiling for fund selection",
        "Regular portfolio reviews"
      ]
    },
    {
      id: 4,
      features: [
        "Personalized portfolio construction",
        "Professional fund management",
        "Direct equity investments",
        "Customized investment strategies",
        "Regular performance reporting"
      ]
    },
    {
      id: 5,
      features: [
        "Alternative investment opportunities",
        "Systematic investment opportunities",
        "Private equity fund access",
        "Hedge fund strategies",
        "Due diligence and fund analysis"
      ]
    },
    {
      id: 6,
      features: [
        "Income tax planning and optimization",
        "Tax-saving investment strategies",
        "Corporate tax planning",
        "GST compliance and planning",
        "Tax-efficient wealth creation"
      ]
    },
    {
      id: 7,
      features: [
        "Home loan pre-approval assistance",
        "Interest rate comparison and negotiation",
        "Documentation support",
        "Loan processing guidance",
        "EMI planning and optimization"
      ]
    },
    {
      id: 8,
      features: [
        "Working capital financing",
        "Term loan arrangements",
        "Business expansion funding",
        "Equipment financing solutions",
        "Cash flow management support"
      ]
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-primary py-32">
        <div className="container">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive financial solutions tailored to meet your unique needs
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-accent rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Explore our range of professional financial services"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const details = serviceDetails.find(item => item.id === service.id);
        
        return (
          <section 
            key={service.id} 
            className={`section ${index % 2 === 0 ? 'bg-background' : 'bg-white'}`}
            id={`service-${service.id}`}
          >
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <SectionHeading title={service.title} subtitle={service.description} />
                  
                  <div className="space-y-3 mb-8">
                    {details?.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                        <p className="text-neutral-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="btn-primary">
                    Inquire About This Service
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-background'}`}>
                    <img 
                      src={getServiceImage(service.id)}
                      alt={getServiceImageAlt(service.id)}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder-service.svg';
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we work with you to achieve financial success"
            center
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Initial Consultation", description: "We start with understanding your financial needs and goals." },
              { step: "2", title: "Customized Planning", description: "We develop tailored strategies to address your specific requirements." },
              { step: "3", title: "Implementation", description: "We execute the plan with precision and attention to detail." },
              { step: "4", title: "Ongoing Support", description: "We provide continuous guidance and adjust strategies as needed." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-dark p-6 rounded-lg relative z-10">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-200">{item.description}</p>
                </div>
                
                {/* Connect line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-accent z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default Services;