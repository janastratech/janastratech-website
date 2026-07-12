import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const allServices = [
  { title: 'AI Chatbot', description: 'Intelligent conversational AI solutions that automate customer support and engagement with natural language processing.', icon: 'MessageSquare' },
  { title: 'REST API Development', description: 'Robust, scalable RESTful APIs designed for seamless integration and high performance across platforms.', icon: 'Code' },
  { title: 'Web Design & Development', description: 'Stunning, responsive websites built with cutting-edge technologies and pixel-perfect design aesthetics.', icon: 'Globe' },
  { title: 'Mobile App Development', description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.', icon: 'Smartphone' },
  { title: 'Software Development', description: 'Custom enterprise software solutions engineered for reliability, scalability, and business growth.', icon: 'Cpu' },
  { title: 'Logo Design & Graphics', description: 'Creative visual identity design including logos, branding kits, and marketing collateral that captivates.', icon: 'Palette' },
  { title: 'Digital Marketing', description: 'Data-driven marketing strategies encompassing SEO, SEM, social media, and content marketing for maximum ROI.', icon: 'TrendingUp' },
  { title: 'LLM Models', description: 'Custom large language model fine-tuning and deployment for domain-specific AI applications and automation.', icon: 'Brain' },
  { title: 'E-Commerce Solutions', description: 'End-to-end e-commerce platforms with secure payments, inventory management, and conversion optimization.', icon: 'ShoppingCart' },
  { title: 'Data Processing', description: 'Advanced data pipelines and ETL workflows that transform raw data into actionable business intelligence.', icon: 'Database' },
  { title: 'Data Management', description: 'Comprehensive data governance, warehousing, and analytics solutions for enterprise-grade data management.', icon: 'BarChart3' },
];

const Services: React.FC = () => {
  return (
    <div id="services-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="gradient-text">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Comprehensive digital solutions to power your business forward. From ideation to deployment, we've got you covered.
        </motion.p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="services-grid">
            {allServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
