import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'HealthPlus AI Platform',
    description: 'An AI-powered healthcare platform with symptom checking, appointment scheduling, and telemedicine integration serving 50K+ users.',
    tags: ['React', 'Node.js', 'TensorFlow', 'AWS'],
    gradient: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
  },
  {
    title: 'NexTrade Dashboard',
    description: 'Real-time trading dashboard with live market data, portfolio analytics, and automated trading strategies for 10K+ traders.',
    tags: ['Next.js', 'WebSocket', 'PostgreSQL', 'D3.js'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
  },
  {
    title: 'EduFlow Mobile App',
    description: 'Cross-platform educational app with gamified learning, progress tracking, and offline mode. 4.8★ rating on both app stores.',
    tags: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #059669, #22d3ee)',
  },
  {
    title: 'CraftBrew E-Commerce',
    description: 'Full-featured e-commerce platform handling $2M+ monthly transactions with inventory management and subscription services.',
    tags: ['Vue.js', 'Stripe', 'MongoDB', 'Docker'],
    gradient: 'linear-gradient(135deg, #d97706, #f43f5e)',
  },
  {
    title: 'DataSync Pipeline',
    description: 'Enterprise data processing pipeline handling 10M+ records daily with real-time analytics and automated reporting.',
    tags: ['Python', 'Apache Kafka', 'Spark', 'Airflow'],
    gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
  },
  {
    title: 'LegalAI Document Processor',
    description: 'LLM-powered legal document analyzer that saves law firms 20+ hours per week with automated summarization and clause extraction.',
    tags: ['OpenAI', 'LangChain', 'FastAPI', 'Pinecone'],
    gradient: 'linear-gradient(135deg, #0891b2, #4f46e5)',
  },
];

const ProjectMockup: React.FC<{ title: string; gradient: string }> = ({ title, gradient }) => {
  if (title === 'HealthPlus AI Platform') {
    return (
      <div className="portfolio-image-container" style={{ background: gradient, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mockup-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="mockup-header">
            <div className="mockup-dot red" />
            <div className="mockup-dot yellow" />
            <div className="mockup-dot green" />
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: 'auto' }}>healthplus.ai/dashboard</span>
          </div>
          <div className="mockup-content" style={{ display: 'flex', flex: 1, gap: '6px', padding: '6px', overflow: 'hidden' }}>
            <div style={{ width: '20%', background: 'rgba(255,255,255,0.03)', borderRadius: '3px' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ flex: 1, height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', padding: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ width: '40%', height: '3px', background: '#3b82f6', marginBottom: '2px' }} />
                  <div style={{ width: '70%', height: '4px', background: 'white' }} />
                </div>
                <div style={{ flex: 1, height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', padding: '3px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ width: '30%', height: '3px', background: '#10b981', marginBottom: '2px' }} />
                  <div style={{ width: '60%', height: '4px', background: 'white' }} />
                </div>
              </div>
              <div style={{ flex: 1, background: 'rgba(99,102,241,0.08)', borderRadius: '3px', position: 'relative', overflow: 'hidden', minHeight: '40px' }}>
                <svg viewBox="0 0 200 45" style={{ width: '100%', height: '100%' }}>
                  <path d="M 0 22 L 40 22 L 45 5 L 50 35 L 55 22 L 90 22 L 95 2 L 100 40 L 105 22 L 140 22 L 145 15 L 150 30 L 155 22 L 200 22" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (title === 'NexTrade Dashboard') {
    return (
      <div className="portfolio-image-container" style={{ background: gradient, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mockup-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="mockup-header">
            <div className="mockup-dot red" />
            <div className="mockup-dot yellow" />
            <div className="mockup-dot green" />
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: 'auto' }}>nextrade.com/live</span>
          </div>
          <div className="mockup-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', padding: '6px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
              <span style={{ fontSize: '9px', fontWeight: 600, color: 'white' }}>BTC/USD</span>
              <span style={{ fontSize: '8px', color: '#10b981' }}>+4.92% ↑</span>
            </div>
            <div style={{ flex: 1, position: 'relative', minHeight: '50px' }}>
              <svg viewBox="0 0 200 50" style={{ width: '100%', height: '100%' }}>
                <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="45" x2="200" y2="45" stroke="rgba(255,255,255,0.05)" />
                
                <line x1="20" y1="10" x2="20" y2="40" stroke="#ef4444" strokeWidth="1" />
                <rect x="17" y="18" width="6" height="15" fill="#ef4444" />

                <line x1="50" y1="5" x2="50" y2="35" stroke="#10b981" strokeWidth="1" />
                <rect x="47" y="10" width="6" height="18" fill="#10b981" />

                <line x1="80" y1="8" x2="80" y2="30" stroke="#10b981" strokeWidth="1" />
                <rect x="77" y="12" width="6" height="12" fill="#10b981" />

                <line x1="110" y1="20" x2="110" y2="45" stroke="#ef4444" strokeWidth="1" />
                <rect x="107" y="25" width="6" height="15" fill="#ef4444" />

                <line x1="140" y1="5" x2="140" y2="35" stroke="#10b981" strokeWidth="1" />
                <rect x="137" y="8" width="6" height="20" fill="#10b981" />

                <line x1="170" y1="2" x2="170" y2="25" stroke="#10b981" strokeWidth="1" />
                <rect x="167" y="5" width="6" height="15" fill="#10b981" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (title === 'EduFlow Mobile App') {
    return (
      <div className="portfolio-image-container" style={{ background: gradient, padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          width: '90px',
          height: '100%',
          background: '#0f172a',
          border: '3px solid #1e293b',
          borderRadius: '12px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 8px 16px rgba(0,0,0,0.4)'
        }}>
          <div style={{ width: '30px', height: '4px', background: '#1e293b', borderRadius: '2px', margin: '3px auto' }} />
          <div style={{ flex: 1, padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', width: '50%' }} />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
              <svg viewBox="0 0 36 36" style={{ width: '30px', height: '30px' }}>
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.5" />
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="75 25" strokeDashoffset="25" />
                <text x="18" y="21" fill="white" fontSize="9px" textAnchor="middle" fontWeight="bold">75%</text>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '8px', background: 'rgba(16,185,129,0.15)', borderLeft: '2px solid #10b981', borderRadius: '1px' }} />
              <div style={{ height: '8px', background: 'rgba(16,185,129,0.15)', borderLeft: '2px solid #10b981', borderRadius: '1px' }} />
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderLeft: '2px solid #4b5563', borderRadius: '1px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (title === 'CraftBrew E-Commerce') {
    return (
      <div className="portfolio-image-container" style={{ background: gradient, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mockup-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="mockup-header">
            <div className="mockup-dot red" />
            <div className="mockup-dot yellow" />
            <div className="mockup-dot green" />
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: 'auto' }}>craftbrew.com/store</span>
          </div>
          <div className="mockup-content" style={{ flex: 1, padding: '6px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', overflow: 'hidden' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '3px', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ flex: 1, background: 'linear-gradient(to bottom, #d97706, #78350f)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '10px' }}>🍺</span>
              </div>
              <div style={{ width: '80%', height: '3px', background: 'white' }} />
              <div style={{ width: '40%', height: '3px', background: '#f43f5e' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '3px', padding: '3px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ flex: 1, background: 'linear-gradient(to bottom, #f43f5e, #881337)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '10px' }}>🍻</span>
              </div>
              <div style={{ width: '70%', height: '3px', background: 'white' }} />
              <div style={{ width: '50%', height: '3px', background: '#f43f5e' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (title === 'DataSync Pipeline') {
    return (
      <div className="portfolio-image-container" style={{ background: gradient, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="mockup-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="mockup-header">
            <div className="mockup-dot red" />
            <div className="mockup-dot yellow" />
            <div className="mockup-dot green" />
            <span style={{ fontSize: '9px', color: '#64748b', marginLeft: 'auto' }}>datasync-pipeline-viz</span>
          </div>
          <div className="mockup-content" style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '6px' }}>
            <svg viewBox="0 0 200 60" style={{ width: '100%', height: '100%' }}>
              <path d="M 20 30 Q 60 10 100 30 T 180 30" fill="none" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
              <path d="M 20 30 Q 60 50 100 30 T 180 30" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1.5" />
              
              <circle cx="60" cy="20" r="2.5" fill="#818cf8">
                <animate attributeName="cx" values="20;100;180" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" values="30;20;30" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="40" r="2.5" fill="#22d3ee">
                <animate attributeName="cx" values="20;100;180" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="cy" values="30;40;30" dur="1.5s" repeatCount="indefinite" />
              </circle>

              <circle cx="20" cy="30" r="6" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
              <circle cx="100" cy="30" r="6" fill="#1e1b4b" stroke="#3b82f6" strokeWidth="1.5" />
              <circle cx="180" cy="30" r="6" fill="#1e1b4b" stroke="#22d3ee" strokeWidth="1.5" />

              <text x="20" y="21" fill="#94a3b8" fontSize="5px" textAnchor="middle">Input</text>
              <text x="100" y="21" fill="#94a3b8" fontSize="5px" textAnchor="middle">Kafka</text>
              <text x="180" y="21" fill="#94a3b8" fontSize="5px" textAnchor="middle">DB</text>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="portfolio-image-container" style={{ background: gradient, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="mockup-window" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="mockup-header">
          <div className="mockup-dot red" />
          <div className="mockup-dot yellow" />
          <div className="mockup-dot green" />
          <span style={{ fontSize: '9px', color: '#64748b', marginLeft: 'auto' }}>legalai.net/analyzer</span>
        </div>
        <div className="mockup-content" style={{ flex: 1, display: 'flex', gap: '6px', padding: '6px', overflow: 'hidden' }}>
          <div style={{ flex: 1.2, background: 'rgba(255,255,255,0.03)', borderRadius: '3px', padding: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.2)', width: '90%' }} />
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.2)', width: '80%' }} />
            <div style={{ height: '4px', background: 'rgba(99,102,241,0.25)', width: '95%', borderRadius: '1px' }} />
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.2)', width: '85%' }} />
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.2)', width: '70%' }} />
          </div>
          <div style={{ flex: 0.8, background: 'rgba(99,102,241,0.08)', borderRadius: '3px', padding: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ width: '40%', height: '2px', background: '#818cf8' }} />
            <div style={{ width: '100%', height: '1.5px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ width: '90%', height: '1.5px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ width: '70%', height: '1.5px', background: 'rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio-page">
      <div className="page-header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="gradient-text">Portfolio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A showcase of projects that demonstrate our expertise across industries and technologies.
        </motion.p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card portfolio-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                id={`portfolio-card-${index}`}
              >
                <div className="portfolio-image-container">
                  <ProjectMockup title={item.title} gradient={item.gradient} />
                  <div className="portfolio-overlay">
                    <ExternalLink size={20} color="#ffffff" />
                    <span style={{ marginLeft: '6px', color: 'white', fontWeight: 600, fontSize: '0.85rem' }}>View Details</span>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
