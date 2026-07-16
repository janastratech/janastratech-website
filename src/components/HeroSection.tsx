import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Activity, Cpu, Layers } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero-section" style={{ overflow: 'hidden' }}>
      {/* Background orbs */}
      <div className="hero-visual">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="lg:grid-cols-12">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} className="text-indigo-400" />
              <span>Next-Gen Software Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1 }}
            >
              We Build{' '}
              <span className="gradient-text-purple">Digital Experiences</span>
              <br />
              That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '600px', margin: '1.5rem 0 2rem' }}
            >
              From AI-powered chatbots to enterprise-grade platforms, Janastra Technologies transforms
              your boldest ideas into powerful, scalable software solutions that drive
              real business growth.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/services" className="btn-primary" id="hero-cta-services">
                Explore Services
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-outline" id="hero-cta-contact">
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dashboard Mockup */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <div
                className="mockup-window"
                style={{
                  width: '100%',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '1rem',
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
                  transform: 'rotateY(-10deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.5s ease',
                }}
              >
                <div className="mockup-header" style={{ padding: '0.75rem 1rem' }}>
                  <div className="mockup-dot red" />
                  <div className="mockup-dot yellow" />
                  <div className="mockup-dot green" />
                  <span style={{ fontSize: '11px', color: '#64748b', marginLeft: 'auto' }}>janastratech-portal.io</span>
                </div>
                
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Top Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
                      <Activity size={14} className="text-cyan-400" style={{ margin: '0 auto 0.25rem' }} />
                      <p style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>99.98%</p>
                      <p style={{ fontSize: '8px', color: '#64748b' }}>Uptime</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
                      <Cpu size={14} className="text-indigo-400" style={{ margin: '0 auto 0.25rem' }} />
                      <p style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>2.4M</p>
                      <p style={{ fontSize: '8px', color: '#64748b' }}>Requests</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.5rem', textAlign: 'center' }}>
                      <Layers size={14} className="text-purple-400" style={{ margin: '0 auto 0.25rem' }} />
                      <p style={{ fontSize: '12px', fontWeight: 'bold', color: 'white' }}>10.2 ms</p>
                      <p style={{ fontSize: '8px', color: '#64748b' }}>Latency</p>
                    </div>
                  </div>

                  {/* Chart Graph */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.75rem', padding: '0.75rem', position: 'relative', height: '110px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '10px', color: 'white', fontWeight: 600 }}>Analytics Overview</span>
                      <span style={{ fontSize: '8px', color: '#22d3ee', padding: '2px 6px', background: 'rgba(34,211,238,0.1)', borderRadius: '1rem' }}>Live</span>
                    </div>
                    <svg viewBox="0 0 300 80" style={{ width: '100%', height: '80%' }}>
                      <defs>
                        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(34, 211, 238, 0.2)" />
                          <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 50 Q 50 20 100 60 T 200 10 T 300 30" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
                      <path d="M 0 50 Q 50 20 100 60 T 200 10 T 300 30 L 300 80 L 0 80 Z" fill="url(#chart-grad)" />
                    </svg>
                  </div>

                  {/* Terminal block */}
                  <div style={{ background: 'rgba(15,23,42,0.85)', borderRadius: '0.75rem', padding: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem' }}>
                    <Terminal size={14} className="text-indigo-400" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontFamily: 'monospace', fontSize: '9px', color: '#94a3b8' }}>
                      <p style={{ color: '#818cf8' }}>$ npx janastratech-agent start</p>
                      <p style={{ color: '#34d399' }}>✓ AI Agent initialized successfully.</p>
                      <p style={{ color: '#22d3ee' }}>✓ Listening on: port 5000 (Express API)</p>
                      <p style={{ color: '#cbd5e1' }} className="animate-pulse">_ compiling resources...</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
