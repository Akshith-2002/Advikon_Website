import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  HiOutlineChip,
  HiOutlineShieldCheck,
  HiOutlineCog,
  HiOutlineCloudUpload,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiArrowRight,
  HiCheck,
  HiStar,
} from 'react-icons/hi';
import VendingMachineSVG from '../assets/VendingMachineSVG';
import IoTDashboardSVG from '../assets/IoTDashboardSVG';
import ComboMachineSVG from '../assets/ComboMachineSVG';
import BeverageMachineSVG from '../assets/BeverageMachineSVG';
import SnackMachineSVG from '../assets/SnackMachineSVG';
import MadeInIndiaSVG from '../assets/MadeInIndiaSVG';
import CountUp from '../components/CountUp';
import './Home.css';

const features = [
  {
    icon: <HiOutlineChip />,
    title: 'Intelligent Electronics',
    desc: '24V DC Intelligent VMC with IoT system, faulty motor detection, and smart sensor alerts.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Enhanced Security',
    desc: 'Anti-theft bin design, dual lock provision (mechanical + electrical), and surge protection.',
  },
  {
    icon: <HiOutlineCog />,
    title: 'Modular Design',
    desc: '3-Axis precision tray adjustment, supports up to 100 motors, quick assembly & disassembly.',
  },
  {
    icon: <HiOutlineCloudUpload />,
    title: 'Remote Management',
    desc: 'Remote On/Off, configuration, dispensing, error fixing, and real-time temperature alerts.',
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Electrical Safety',
    desc: 'Surge, short circuit, overvoltage, and overload protection with FRLS-grade internal wiring.',
  },
  {
    icon: <HiOutlineGlobe />,
    title: 'Retrofit Compatible',
    desc: 'Designed to modernize existing machines — compatible across motors, electronics, and software.',
  },
];

const stats = [
  { number: 17, suffix: '+', label: 'Years of Expertise' },
  { number: 100, suffix: '+', label: 'Motors Supported' },
  { number: 100, suffix: '%', label: 'Made in India' },
  { number: 3, suffix: '', label: 'Product Categories' },
];

const products = [
  {
    title: 'Combo Vending Machines',
    desc: 'Snack & beverage combined in one intelligent unit. Available in 3-wide, 4-wide, and 5-wide configurations.',
    tag: 'Most Popular',
    svg: <ComboMachineSVG width={160} height={210} />,
  },
  {
    title: 'Beverage Vending Machines',
    desc: 'Dedicated beverage dispensing with advanced cooling system and air-cooled refrigeration with R134a.',
    tag: 'Beverages',
    svg: <BeverageMachineSVG width={140} height={210} />,
  },
  {
    title: 'Snack Vending Machines',
    desc: 'High-capacity snack dispensing with mechanically slanted trays for easy refill and anti-theft design.',
    tag: 'Snacks',
    svg: <SnackMachineSVG width={150} height={210} />,
  },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Operations Manager',
    company: 'Corporate Office, Gurugram',
    text: 'Advikon machines transformed our break room operations. The remote monitoring and smart alerts mean we never have downtime. Excellent build quality.',
    rating: 5,
    highlight: 'Zero downtime since deployment',
  },
  {
    name: 'Priya Mehta',
    role: 'Facility Head',
    company: 'University Campus, Delhi',
    text: 'We deployed 5-wide combos across our campus. The modular design made installation easy and the retrofit compatibility saved us from replacing old units.',
    rating: 5,
    highlight: 'Saved 60% on infrastructure costs',
  },
  {
    name: 'Vikram Singh',
    role: 'Vending Operator',
    company: 'Multi-location, NCR',
    text: 'The IoT dashboard gives me complete visibility across 20+ machines. Motor detection alerts have cut our maintenance costs by 40%. Truly next-gen.',
    rating: 5,
    highlight: '40% lower maintenance costs',
  },
  {
    name: 'Anita Desai',
    role: 'Admin Manager',
    company: 'Hospital, Mumbai',
    text: 'The wheelchair accessible design and smart cooling system were exactly what we needed. Advikon understood our requirements from day one.',
    rating: 5,
    highlight: 'Perfect for healthcare environments',
  },
];

const faqs = [
  {
    q: 'What configurations are available for Advikon vending machines?',
    a: 'We offer 3-Wide, 4-Wide, and 5-Wide configurations — each available with or without storage and with optional 10" to 32" Android touch screens or LCD Display & Metal Keypad.',
  },
  {
    q: 'Are Advikon machines compatible with my existing infrastructure?',
    a: 'Yes. Our machines are designed to be retrofit-compatible — supporting multiple spiral motors, electrical systems, electronics/VMC platforms, software systems, and mechanical hardware from existing setups.',
  },
  {
    q: 'What kind of remote monitoring is available?',
    a: 'Our IoT-based system provides remote On/Off control, configuration, dispensing, error fixing, motor testing, vend sensor alerts, door sensor alerts, and real-time temperature monitoring.',
  },
  {
    q: 'What electrical protections do the machines include?',
    a: 'Complete protection suite: surge & short circuit protection, overvoltage, shock, overload & over-temperature protection, VMC safety shielding, FRLS-grade wiring, and ISI-marked industrial grade power cable.',
  },
  {
    q: 'Where can Advikon machines be deployed?',
    a: 'Our machines are designed for corporate offices, hospitals, universities, factories, retail spaces, institutions, transport hubs, and any high-traffic location requiring automated vending.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      <SEOHead
        title="Smart Vending Machines"
        description="Advikon Technologies — next-generation smart vending machines with 17+ years of expertise. Modular, IoT-enabled, retrofit-compatible. 100% Made in India."
      />
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge" data-aos="fade-up">100% Made in India</span>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Empowering the Future of{' '}
              <span className="gradient-text">Auto Retails</span>
            </h1>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
              Next-generation smart vending machines engineered with 17+ years of
              hands-on expertise. Modular, intelligent, and retrofit-compatible
              solutions for modern retail.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <Link to="/products" className="btn btn-primary">
                Explore Products <HiArrowRight className="btn-arrow" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-visual" data-aos="fade-left" data-aos-delay="200">
            <VendingMachineSVG className="hero-machine-svg" />
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,100 720,0 1440,60 L1440,100 L0,100 Z" fill="var(--white)" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="stat-number">
                  <CountUp end={s.number} suffix={s.suffix} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-content" data-aos="fade-right">
            <span className="section-label">About Advikon</span>
            <h2 className="section-title">Built from Real Operational Challenges</h2>
            <p className="section-subtitle">
              Advikon Technologies is a next-generation vending technology company
              with deep roots in vending operations, electronics development,
              software architecture, and full-scale ERP integration.
            </p>
            <ul className="about-checklist">
              <li><HiCheck className="check-icon" /> Mechanical engineering + intelligent electronics + cloud software</li>
              <li><HiCheck className="check-icon" /> Future-ready and retrofit-compatible designs</li>
              <li><HiCheck className="check-icon" /> Engineered from field-tested operational challenges</li>
              <li><HiCheck className="check-icon" /> Full ERP integration and inventory management</li>
            </ul>
            <Link to="/about" className="btn btn-dark">
              Learn More <HiArrowRight className="btn-arrow" />
            </Link>
          </div>
          <div className="about-preview-visual" data-aos="fade-left">
            <IoTDashboardSVG className="dashboard-svg" />
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section products-preview">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Future-Ready Smart Vending Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Intelligent, modular, and retrofit-compatible vending machines
              engineered for operational excellence across diverse locations.
            </p>
          </div>
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={p.title} className="product-card" data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="product-card-illustration">
                  {p.svg}
                </div>
                <span className="product-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to="/products" className="product-link">
                  View Details <HiArrowRight className="btn-arrow" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }} data-aos="fade-up">
            <Link to="/products" className="btn btn-primary">
              View All Products <HiArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Key Features</span>
            <h2 className="section-title">Why Choose Advikon?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Every feature is engineered from real operational challenges faced
              in the field — not theoretical designs.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={f.title} className="feature-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-header" data-aos="fade-up">
            <div className="testimonials-header-text">
              <span className="section-label">Testimonials</span>
              <h2 className="section-title">Trusted by Operators<br />Across India</h2>
            </div>
            <div className="testimonials-header-stat">
              <div className="testimonials-avg-rating">
                <span className="avg-rating-number">5.0</span>
                <div className="avg-rating-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <HiStar key={j} />
                  ))}
                </div>
                <span className="avg-rating-label">Average Rating</span>
              </div>
            </div>
          </div>

          {/* Scrolling marquee row */}
          <div className="testimonials-marquee" data-aos="fade-up" data-aos-delay="150">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="t-card">
                  <div className="t-card-top">
                    <div className="t-card-highlight">{t.highlight}</div>
                    <div className="t-card-stars">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <HiStar key={j} />
                      ))}
                    </div>
                  </div>
                  <p className="t-card-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="t-card-author">
                    <div className="t-card-avatar">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="t-card-info">
                      <span className="t-card-name">{t.name}</span>
                      <span className="t-card-role">{t.role}</span>
                      <span className="t-card-company">{t.company}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Made in India */}
      <section className="section made-india-section">
        <div className="container made-india-grid">
          <div data-aos="fade-right">
            <span className="section-label">Quality Assurance</span>
            <h2 className="section-title">Proudly Made in India</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              Every Advikon machine is designed, engineered, and manufactured in India.
              From ISI-marked industrial cables to FRLS-grade wiring, we use only
              the highest quality components meeting Indian electrical safety standards.
            </p>
            <ul className="about-checklist">
              <li><HiCheck className="check-icon" /> ISI Marked Industrial Grade Components</li>
              <li><HiCheck className="check-icon" /> Class I Earthed Appliance Protection</li>
              <li><HiCheck className="check-icon" /> FRLS (Flame Retardant Low Smoke) Wiring</li>
              <li><HiCheck className="check-icon" /> Complete Electrical Safety Certification</li>
            </ul>
          </div>
          <div className="made-india-visual" data-aos="fade-left">
            <MadeInIndiaSVG width={280} height={190} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-left" data-aos="fade-right">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Got Questions?<br />We've Got Answers.</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              Everything you need to know about Advikon's smart vending machines.
            </p>
            <Link to="/contact" className="btn btn-dark" style={{ marginTop: 16 }}>
              Ask Us Anything <HiArrowRight className="btn-arrow" />
            </Link>
          </div>
          <div className="faq-right" data-aos="fade-up">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <div className="faq-num">{String(i + 1).padStart(2, '0')}</div>
                  <span>{faq.q}</span>
                  <div className="faq-toggle">
                    <span className="faq-toggle-icon" />
                  </div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center" data-aos="fade-up">
          <h2>Ready to Upgrade Your Vending Operations?</h2>
          <p>
            Partner with Advikon for intelligent, reliable, and future-ready vending solutions.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Contact Us <HiArrowRight className="btn-arrow" />
            </Link>
            <Link to="/products" className="btn btn-outline">
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
