import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Financial Care';
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      content: "+91 98876 10105",
      link: "tel:+919887610105"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: "calalit18@gmail.com",
      link: "mailto:calalit18@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Address",
      content: "134, 1st Floor, Govindam, Old RTO Road, Bhilwara, Rajasthan",
      link: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.3638202488833!2d74.6243186019307!3d25.343782760417007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749245063637!5m2!1sen!2sin"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Office Hours",
      content: "Monday - Saturday: 10:00 AM - 7:00 PM",
      link: null
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg max-w-2xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reach out to us for any questions or to schedule a consultation
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-accent rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="We're here to help with all your financial needs" 
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-neutral-700 hover:text-primary transition-colors"
                            target={info.title === "Office Address" ? "_blank" : undefined}
                            rel={info.title === "Office Address" ? "noopener noreferrer" : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-neutral-700">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google Maps Section */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">Find Us On Map</h3>
                <div className="w-full overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.4557560482214!2d74.62370186953027!3d25.343719010633155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c248000eba8b%3A0xf8bd4fc7ae14cb37!2sLalit%20Kabra%20%26%20Co.!5e0!3m2!1sen!2sin!4v1749245259249!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you soon" 
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                question: "What services do you offer?", 
                answer: "We offer a comprehensive range of financial services including tax planning and filing, business auditing, financial advisory, and GST and corporate filing services."
              },
              { 
                question: "How do I schedule a consultation?", 
                answer: "You can schedule a consultation by filling out our contact form, calling our office, or sending us an email. We'll get back to you promptly to arrange a meeting."
              },
              { 
                question: "What documents should I bring to a consultation?", 
                answer: "It's helpful to bring recent financial statements, tax returns, investment details, and any specific financial concerns or questions you'd like to discuss."
              },
              { 
                question: "Do you work with individuals or businesses?", 
                answer: "We work with both individuals and businesses of all sizes, from sole proprietors to large corporations, providing tailored financial services to meet their specific needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-background p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-primary mb-2">{faq.question}</h4>
                <p className="text-neutral-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;