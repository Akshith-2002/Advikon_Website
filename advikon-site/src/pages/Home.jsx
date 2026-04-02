import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  HiOutlineChip,
  HiOutlineCog,
  HiOutlineCloudUpload,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineDesktopComputer,
  HiOutlineCreditCard,
  HiOutlineCube,
  HiOutlineOfficeBuilding,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineShoppingCart,
  HiArrowRight,
  HiCheck,
} from 'react-icons/hi';
import VendingMachineSVG from '../assets/VendingMachineSVG';
import IoTDashboardSVG from '../assets/IoTDashboardSVG';
import ComboMachineSVG from '../assets/ComboMachineSVG';
import BeverageMachineSVG from '../assets/BeverageMachineSVG';
import SnackMachineSVG from '../assets/SnackMachineSVG';
import SanitaryMachineSVG from '../assets/SanitaryMachineSVG';
import SmartFridgeSVG from '../assets/SmartFridgeSVG';
import CustomMachineSVG from '../assets/CustomMachineSVG';
import CountUp from '../components/CountUp';
import './Home.css';

/* ============================================================
   DATA
   ============================================================ */

const trustStrip = [
  { number: 17, suffix: '+', label: 'Years Vending Expertise' },
  { label: 'Designed & Manufactured in India' },
  { label: 'AI + IoT Enabled Systems' },
  { label: 'End-to-End Solution Provider' },
];

const coreOfferings = [
  { icon: <HiOutlineCube />, title: 'In-house Machine Manufacturing', desc: 'Complete design-to-production under one roof.' },
  { icon: <HiOutlineChip />, title: 'Custom Electronics & Controller Design', desc: 'Proprietary VMC, PCB, and firmware development.' },
  { icon: <HiOutlineCloudUpload />, title: 'IoT & Cloud Software Platform', desc: 'Real-time monitoring, analytics, and remote control.' },
  { icon: <HiOutlineDesktopComputer />, title: 'AI-driven Monitoring & Alerts', desc: 'Predictive maintenance and intelligent operations.' },
  { icon: <HiOutlineCog />, title: 'ERP & API Integration', desc: 'Seamless enterprise connectivity and data flow.' },
];

const products = [
  { title: 'Combo Vending Machines', desc: 'Snacks + beverages in one intelligent system.', tag: 'Most Popular', svg: <ComboMachineSVG width={140} height={190} /> },
  { title: 'Snack Vending Machines', desc: 'Optimized for packaged food and FMCG.', tag: 'Snacks', svg: <SnackMachineSVG width={130} height={190} /> },
  { title: 'Beverage Vending Machines', desc: 'Efficient cooling for drinks & dairy.', tag: 'Beverages', svg: <BeverageMachineSVG width={120} height={190} /> },
  { title: 'Sanitary Napkin Machines', desc: 'Reliable, hygienic, and purpose-built.', tag: 'Hygiene', svg: <SanitaryMachineSVG width={140} height={190} /> },
  { title: 'Smart AI Refrigerators', desc: 'Advanced, sensor-based automated retail.', tag: 'AI-Powered', svg: <SmartFridgeSVG width={140} height={190} /> },
  { title: 'Custom Vending Machines', desc: 'Fully tailored to your requirement.', tag: 'Custom', svg: <CustomMachineSVG width={140} height={190} /> },
];

const techFeatures = [
  { icon: <HiOutlineGlobe />, title: 'IoT-Based Remote Monitoring', desc: 'Track machine status, sales, and health in real time from anywhere.' },
  { icon: <HiOutlineChip />, title: 'Smart Inventory Management', desc: 'Batch-wise tracking with expiry control and barcode integration.' },
  { icon: <HiOutlineLightningBolt />, title: 'Advanced Electronics Reliability', desc: 'Designed to handle voltage fluctuations and harsh field conditions.' },
  { icon: <HiOutlineCloudUpload />, title: 'Cloud Dashboard & Analytics', desc: 'Centralized control, sales reports, and operational intelligence.' },
  { icon: <HiOutlineCreditCard />, title: 'Cashless Payment Integration', desc: 'UPI, QR, cards, POS, RFID, and digital wallets — all built in.' },
];

const differentiators = [
  'Machine downtime',
  'Sensor accuracy issues',
  'Payment failures',
  'Inventory mismatches',
  'ERP integration complexities',
];

const industries = [
  { icon: <HiOutlineOfficeBuilding />, title: 'Corporate Offices' },
  { icon: <HiOutlineHeart />, title: 'Hospitals & Healthcare' },
  { icon: <HiOutlineCube />, title: 'Manufacturing Units' },
  { icon: <HiOutlineShoppingCart />, title: 'Public Infrastructure' },
  { icon: <HiOutlineAcademicCap />, title: 'Educational Institutions' },
];

const faqs = [
  { q: 'What types of vending machines does Advikon offer?', a: 'We offer Snack, Beverage, Combo, AI-based Smart Refrigerator, Sanitary Napkin, and fully Customized Machines as per client requirements.' },
  { q: 'Are Advikon machines compatible with existing infrastructure?', a: 'Yes. Our machines feature plug & play MDB compatibility and are retrofit-ready — supporting multiple spiral motors, electrical systems, and software platforms.' },
  { q: 'What remote monitoring capabilities are available?', a: 'Our IoT platform provides live monitoring, sales & audit reports, remote configuration, API integration, and cloud dashboard access.' },
  { q: 'What electrical protections do the machines include?', a: 'Complete protection: surge, shock, short circuit, overvoltage, and overload protection with FRLS-grade wiring and ISI-marked components.' },
  { q: 'What payment methods are supported?', a: 'UPI, Debit & Credit Cards, Net Banking, QR codes, POS, RFID, and wallet-based transactions with real-time validation and instant auto refund.' },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      <SEOHead
        title="Intelligent Vending Machines | Advikon Technologies"
        description="AI & IoT enabled vending machines built on 17+ years of real operational experience. End-to-end solutions — hardware, software, and cloud. 100% Made in India."
      />

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge" data-aos="fade-up">AI + IoT Enabled</span>
            <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Intelligent Vending.{' '}
              <span className="gradient-text">Engineered for the Real World.</span>
            </h1>
            <p className="hero-desc" data-aos="fade-up" data-aos-delay="200">
              AI & IoT enabled vending machines built on 17+ years of real operational
              experience — delivering reliable, scalable, and future-ready automation.
            </p>
            <p className="hero-supporting" data-aos="fade-up" data-aos-delay="250">
              End-to-end solutions across mechanical engineering, electronics, and cloud software.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <Link to="/contact" className="btn btn-primary">
                Get a Demo <HiArrowRight className="btn-arrow" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Request Proposal
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

      {/* ─── TRUST STRIP ─── */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            {trustStrip.map((t, i) => (
              <div key={i} className="trust-item" data-aos="fade-up" data-aos-delay={i * 80}>
                {t.number ? (
                  <span className="trust-number"><CountUp end={t.number} suffix={t.suffix} /></span>
                ) : null}
                <span className="trust-label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRO / POSITIONING ─── */}
      <section className="section intro-section">
        <div className="container intro-grid">
          <div className="intro-content" data-aos="fade-right">
            <span className="section-label">About Advikon</span>
            <h2 className="section-title">Not Just Machines. A Complete Vending Ecosystem.</h2>
            <p className="section-subtitle">
              Advikon Technologies is a next-generation vending technology company built on
              deep, hands-on industry experience. Our foundation comes from solving real-world
              vending challenges — from machine reliability and electronics stability to
              inventory control and ERP integration.
            </p>
            <p className="intro-emphasis">
              We design and deliver fully integrated vending systems that combine:
            </p>
            <ul className="about-checklist">
              <li><HiCheck className="check-icon" /> Precision mechanical engineering</li>
              <li><HiCheck className="check-icon" /> Intelligent electronics</li>
              <li><HiCheck className="check-icon" /> Cloud-based software & analytics</li>
            </ul>
            <Link to="/about" className="btn btn-dark">
              Learn More <HiArrowRight className="btn-arrow" />
            </Link>
          </div>
          <div className="intro-visual" data-aos="fade-left">
            <IoTDashboardSVG className="dashboard-svg" />
          </div>
        </div>
      </section>

      {/* ─── CORE OFFERING ─── */}
      <section className="section core-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Core Offering</span>
            <h2 className="section-title">End-to-End Vending Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Unlike conventional manufacturers, Advikon provides complete ownership of the
              vending ecosystem — from hardware to software, everything works seamlessly together.
            </p>
          </div>
          <div className="core-grid">
            {coreOfferings.map((c, i) => (
              <div key={c.title} className="core-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="core-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="section products-preview">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Our Products</span>
            <h2 className="section-title">Flexible Machines for Every Use Case</h2>
          </div>
          <div className="products-grid-6">
            {products.map((p, i) => (
              <div key={p.title} className="product-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="product-card-illustration">
                  {p.svg || <div className="product-icon-fallback">{p.icon}</div>}
                </div>
                <span className="product-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 32 }} data-aos="fade-up">
            <Link to="/products" className="btn btn-primary">
              Explore All Products <HiArrowRight className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY ─── */}
      <section className="section tech-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Technology</span>
            <h2 className="section-title">Built with Intelligence at the Core</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Our machines are powered by a robust technology stack designed for real-world operations.
            </p>
          </div>
          <div className="tech-grid-5">
            {techFeatures.map((t, i) => (
              <div key={t.title} className="tech-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="tech-card-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATOR ─── */}
      <section className="section diff-section">
        <div className="container diff-grid">
          <div data-aos="fade-right">
            <span className="section-label">What Sets Us Apart</span>
            <h2 className="section-title">Designed from Real Operational Experience</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              What makes Advikon different is not just technology — it's experience.
              Our systems are built from years of on-ground vending operations, solving challenges like:
            </p>
            <ul className="about-checklist diff-list">
              {differentiators.map((d) => (
                <li key={d}><HiCheck className="check-icon" /> {d}</li>
              ))}
            </ul>
            <p className="diff-conclusion">
              This ensures every machine is practical, reliable, and field-tested.
            </p>
          </div>
          <div className="diff-visual" data-aos="fade-left">
            <div className="diff-card">
              <span className="diff-card-number">17+</span>
              <span className="diff-card-text">Years of on-ground<br />vending experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUTURE READY / RETROFIT ─── */}
      <section className="section retrofit-home-section">
        <div className="container">
          <div className="retrofit-home-grid">
            <div data-aos="fade-right">
              <span className="section-label" style={{ background: 'rgba(0,172,193,0.15)', color: 'var(--accent-light)' }}>Future Ready</span>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>Upgrade Without Replacing</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                Advikon machines are designed to be modular, retrofit-compatible, and
                scalable across locations — allowing operators to upgrade technology
                without replacing existing infrastructure.
              </p>
              <ul className="retrofit-home-list">
                <li><HiCheck className="check-icon" /> Modular architecture</li>
                <li><HiCheck className="check-icon" /> Retrofit-compatible with existing machines</li>
                <li><HiCheck className="check-icon" /> Scalable across multiple locations</li>
                <li><HiCheck className="check-icon" /> Save cost and improve efficiency</li>
              </ul>
            </div>
            <div className="retrofit-home-visual" data-aos="fade-left">
              <VendingMachineSVG className="retrofit-machine-svg" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="section industries-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Industries</span>
            <h2 className="section-title">Serving Diverse Business Environments</h2>
          </div>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <div key={ind.title} className="industry-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS — will be added once initial clients provide feedback ─── */}

      {/* ─── FAQ ─── */}
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
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-question">
                  <div className="faq-num">{String(i + 1).padStart(2, '0')}</div>
                  <span>{faq.q}</span>
                  <div className="faq-toggle"><span className="faq-toggle-icon" /></div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner"><p>{faq.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta-section">
        <div className="container text-center" data-aos="fade-up">
          <h2>Ready to Modernize Your Vending Operations?</h2>
          <p>Partner with Advikon to deploy intelligent, scalable, and future-ready vending solutions.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get a Demo <HiArrowRight className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Talk to Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
