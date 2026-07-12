import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServiceCard from '../components/ServiceCard';


const services = [
  { title: 'AI Chatbot', description: 'Intelligent conversational AI solutions that automate customer support and engagement.', icon: 'MessageSquare' },
  { title: 'REST API Development', description: 'Robust, scalable RESTful APIs designed for seamless integration and high performance.', icon: 'Code' },
  { title: 'Web Design & Development', description: 'Stunning, responsive websites built with cutting-edge technologies.', icon: 'Globe' },
  { title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android.', icon: 'Smartphone' },
  { title: 'Software Development', description: 'Custom enterprise software solutions engineered for reliability and scalability.', icon: 'Cpu' },
  { title: 'Digital Marketing', description: 'Data-driven marketing strategies for maximum ROI and brand growth.', icon: 'TrendingUp' },
];

const Home: React.FC = () => {
  return (
    <div id="home-page">
      <HeroSection />
      <StatsSection />

      {/* Services Preview */}
      <section className="section" id="home-services">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We deliver end-to-end digital solutions tailored to your business needs.
          </motion.p>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '3rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/services" className="btn-primary" id="home-view-all-services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section" id="home-cta">
        <div className="container">
          <motion.div
            className="glass-card"
            style={{
              padding: '4rem 3rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(6, 182, 212, 0.1))',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>
              Ready to Build Something{' '}
              <span className="gradient-text-purple">Amazing</span>?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Let's discuss your project and bring your ideas to life with cutting-edge technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" id="cta-contact">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline" id="cta-portfolio">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
