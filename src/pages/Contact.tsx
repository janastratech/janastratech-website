import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div id="contact-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact <span className="gradient-text">Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have a project in mind or want to learn more about our services? Drop us a line and let's build something exceptional together.
        </motion.p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                Let's Start a <span className="gradient-text-purple">Conversation</span>
              </h2>
              <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                We're always excited to hear about new projects, creative ideas, or questions you might have. Fill out the form, and our engineering team will get back to you within 24 hours.
              </p>

              <div className="glass-card contact-info-card">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@atech.com</p>
                  <p>support@atech.com</p>
                </div>
              </div>

              <div className="glass-card contact-info-card">
                <div className="contact-info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon - Fri, 9am - 6pm PST</p>
                </div>
              </div>

              <div className="glass-card contact-info-card">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Innovation Drive</p>
                  <p>Silicon Valley, CA, USA</p>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
