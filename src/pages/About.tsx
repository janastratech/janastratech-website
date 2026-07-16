import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Users, Shield, Rocket } from 'lucide-react';



const values = [
  { icon: Target, title: 'Mission-Driven', description: 'We focus on delivering solutions that create real, measurable impact for your business.' },
  { icon: Lightbulb, title: 'Innovation First', description: 'We stay ahead of the curve, adopting cutting-edge technologies to give you a competitive edge.' },
  { icon: Heart, title: 'Client-Centric', description: 'Your success is our success. We build lasting partnerships through transparency and excellence.' },
  { icon: Users, title: 'Collaborative', description: 'We work as an extension of your team, ensuring seamless communication at every step.' },
  { icon: Shield, title: 'Quality Assured', description: 'Rigorous testing, code reviews, and best practices ensure every deliverable meets the highest standards.' },
  { icon: Rocket, title: 'Agile Delivery', description: 'Fast iterations, continuous feedback, and on-time delivery — we move at the speed of your ambition.' },
];



const About: React.FC = () => {
  return (
    <div id="about-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="gradient-text">Janastra Technologies</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're a passionate team of 50+ developers, designers, and strategists
          building the future of technology.
        </motion.p>
      </div>

      {/* Story Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                Our <span className="gradient-text-purple">Story</span>
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                Founded in 2019, Janastra Technologies began with a simple belief: every business
                deserves access to world-class software. What started as a small team of 5
                passionate developers has grown into a powerhouse of 50+ experts serving
                clients across 20+ countries.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '1rem' }}>
                From AI-powered solutions to enterprise platforms, we've delivered 200+ projects
                with a 98% client satisfaction rate. Our secret? A relentless focus on quality,
                innovation, and the belief that great software should feel effortless.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Today, we're at the forefront of AI, cloud computing, and digital transformation,
                helping businesses of all sizes turn their boldest ideas into reality.
              </p>
            </motion.div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                color: 'var(--primary-400)',
              }}>
                <Rocket size={80} strokeWidth={1} />
                <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Since 2019</span>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Values</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The principles that guide everything we do.
          </motion.p>

          <div className="values-grid">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <item.icon size={36} color="#818cf8" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
