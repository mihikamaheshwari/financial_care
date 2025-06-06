import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-2">Message Sent!</h3>
          <p className="text-neutral-600">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-neutral-700 mb-2">
                Full Name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-neutral-700 mb-2">
                Email Address <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-neutral-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-neutral-700 mb-2">
                Subject <span className="text-error">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select a subject</option>
                <option value="Tax Planning">Tax Planning</option>
                <option value="Business Auditing">Business Auditing</option>
                <option value="Financial Advisory">Financial Advisory</option>
                <option value="GST & Corporate Filing">GST & Corporate Filing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-neutral-700 mb-2">
              Your Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="input"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className={`btn-primary w-full flex items-center justify-center ${
              isSubmitting ? 'opacity-75 cursor-wait' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Sending...</span>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;