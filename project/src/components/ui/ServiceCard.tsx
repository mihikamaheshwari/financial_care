import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ServiceType } from '../../types';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {IconComponent && <IconComponent className="text-primary w-8 h-8" />}
      </div>
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-neutral-600">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;