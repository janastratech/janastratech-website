import { motion } from 'framer-motion';
import {
  MessageSquare,
  Code,
  Globe,
  Smartphone,
  Cpu,
  Palette,
  TrendingUp,
  Brain,
  ShoppingCart,
  Database,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Code,
  Globe,
  Smartphone,
  Cpu,
  Palette,
  TrendingUp,
  Brain,
  ShoppingCart,
  Database,
  BarChart3,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const IconComponent = iconMap[icon] || Code;

  return (
    <motion.div
      className="glass-card service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      id={`service-card-${index}`}
    >
      <div className="service-card-icon">
        <IconComponent size={26} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
