import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  HiArrowRight,
  HiCheck,
  HiOutlineLightBulb,
  HiOutlineEye,
  HiOutlineStar,
} from 'react-icons/hi';
import './About.css';

const timeline = [
  { year: 'Foundation', text: '17+ years of hands-on vending expertise across operations, electronics, software, and ERP integration.' },
  { year: 'Innovation', text: 'Built a modern, modular vending ecosystem integrating mechanical engineering, intelligent electronics, and cloud-based software.' },
  { year: 'Today', text: 'Delivering future-ready, retrofit-compatible smart vending machines — 100% Made in India.' },
];

const values = [
  {
    icon: <HiOutlineLightBulb />,
    title: 'Innovation from Experience',
    desc: 'Our solutions are engineered from real operational challenges faced in the field — from electronics failures and sensor accuracy to ERP integration complexities.',
  },
  {
    icon: <HiOutlineEye />,
    title: 'Operational Excellence',
    desc: 'We design machines that enable vending operators to upgrade intelligently without replacing existing infrastructure.',
  },
  {
    icon: <HiOutlineStar />,
    title: 'Quality & Reliability',
    desc: 'Every machine features comprehensive electrical protection, FRLS-grade wiring, ISI-marked components, and industrial-grade build quality.',
  },
];

const capabilities = [
  'Vending Operations & Field Expertise',
  'Electronics Development & IoT',
  'Software Architecture & Cloud Platforms',
  'Full-Scale ERP Integration',
  'Mechanical & Structural Engineering',
  'Advanced Cooling System Design',
];

export default function About() {
  return (
    <main>
      <SEOHead
        title="About Us"
        description="Advikon Technologies — 17+ years of vending expertise. Built from real operational challenges in electronics, software, ERP integration, and mechanical engineering."
      />
      {/* Page Header */}
      <section className="page-header">
        <div className="container" data-aos="fade-up">
          <span className="section-label">About Us</span>
          <h1 className="page-title">Built by Vending Experts,<br />for Vending Operators</h1>
          <p className="page-desc">
            Advikon Technologies is a next-generation vending technology company
            established with over 17+ years of hands-on vending expertise.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-story-grid">
          <div data-aos="fade-right">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              The founder's extensive background in vending operations, electronics
              development, software architecture, and full-scale ERP integration
              forms the backbone of our technology platform.
            </p>
            <p className="about-body-text">
              Unlike conventional manufacturers, Advikon was born from real
              operational challenges — electronics failures, sensor inaccuracies,
              ERP integration gaps, and inventory management complexities that
              operators face every day in the field.
            </p>
            <p className="about-body-text">
              Today, we are building a modern, modular vending ecosystem that
              seamlessly integrates mechanical engineering, intelligent electronics,
              and cloud-based software to deliver machines that are both future-ready
              and retrofit-compatible.
            </p>
          </div>
          <div className="timeline" data-aos="fade-left">
            {timeline.map((item, i) => (
              <div key={item.year} className="timeline-item" data-aos="fade-up" data-aos-delay={i * 150}>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card" data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container capabilities-grid">
          <div data-aos="fade-right">
            <span className="section-label">Core Capabilities</span>
            <h2 className="section-title">End-to-End Expertise</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              From mechanical design to cloud software — we handle the entire
              vending technology stack in-house.
            </p>
          </div>
          <div className="capabilities-list">
            {capabilities.map((c, i) => (
              <div key={c} className="capability-item" data-aos="fade-up" data-aos-delay={i * 80}>
                <HiCheck className="capability-check" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center" data-aos="fade-up">
          <h2>Let's Build the Future of Vending Together</h2>
          <p>
            Partner with a team that understands vending from the inside out.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <HiArrowRight className="btn-arrow" />
          </Link>
        </div>
      </section>
    </main>
  );
}
