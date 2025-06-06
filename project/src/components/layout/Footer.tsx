import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Financial Care</h3>
            <p className="text-neutral-200 mb-4">
              Professional financial services tailored to meet your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Part 1 */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Investment Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Financial Advisory
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  PMS
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  S.I.F / A.I.F
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Part 2 */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Other Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Home Loan
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-200 hover:text-white transition-colors">
                  Business Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 98876 10105</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>calalit18@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>134, 1st Floor, Govindam, Old RTO Road, Bhilwara, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-dark mt-8 pt-8 text-center text-neutral-300">
          <p>&copy; {new Date().getFullYear()} Financial Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;