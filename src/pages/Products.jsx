import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  HiArrowRight,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineLightningBolt,
  HiOutlineCube,
  HiOutlineDesktopComputer,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiCheck,
} from 'react-icons/hi';
import ComboMachineSVG from '../assets/ComboMachineSVG';
import BeverageMachineSVG from '../assets/BeverageMachineSVG';
import SnackMachineSVG from '../assets/SnackMachineSVG';
import './Products.css';

const machines = [
  {
    svg: <ComboMachineSVG width={240} height={310} />,
    title: 'Combo Vending Machine',
    subtitle: 'Snack & Beverage Combined',
    desc: 'Our most versatile unit — dispenses both snacks and beverages from a single intelligent machine. Ideal for corporate offices, hospitals, universities, and high-traffic locations.',
    features: ['3-Wide / 4-Wide / 5-Wide options', 'With & Without Storage', 'Optional 10" to 32" Touch Screen', 'LCD Display & Keypad options'],
    tag: 'Most Popular',
  },
  {
    svg: <BeverageMachineSVG width={210} height={310} />,
    title: 'Beverage Vending Machine',
    subtitle: 'Dedicated Beverage Dispensing',
    desc: 'Optimized for cold beverage dispensing with advanced air-cooled refrigeration using R134a gas. Perfect for factories, retail spaces, and transport hubs.',
    features: ['Air-Cooled Refrigeration (R134a)', 'Plug & Play Cooling Unit', 'High Efficiency Design', 'Multiple Configuration Options'],
    tag: 'Beverages',
  },
  {
    svg: <SnackMachineSVG width={220} height={310} />,
    title: 'Snack Vending Machine',
    subtitle: 'High-Capacity Snack Dispensing',
    desc: 'Engineered for maximum capacity with mechanically slanted trays for easy refilling. Supports up to 100 motors for diverse product offerings.',
    features: ['Supports up to 100 Motors', 'Slanted Tray Design', '3-Axis Precision Adjustment', 'Anti-theft Bin Design'],
    tag: 'Snacks',
  },
];

const bentoSpecs = [
  { value: '230V AC', label: 'Power Supply', desc: 'Single phase, 5 Amp rated input with ISI marked industrial grade cable', icon: <HiOutlineLightningBolt /> },
  { value: '750W', label: 'Max Power', desc: 'Efficient power consumption with 50 Hz frequency for stable operation', icon: <HiOutlineLightningBolt /> },
  { value: 'R134a', label: 'Cooling System', desc: 'Air-cooled refrigeration with plug & play removable unit for easy maintenance', icon: <HiOutlineCog /> },
  { value: '24V DC', label: 'VMC + IoT Control', desc: 'Intelligent vending machine controller with real-time IoT connectivity', icon: <HiOutlineChip /> },
  { value: '10"–32"', label: 'Touch Display', desc: 'Optional Android touch screen for interactive consumer experience', icon: <HiOutlineDesktopComputer /> },
  { value: 'Dual Lock', label: 'Security System', desc: 'Combined mechanical and electrical locking with anti-theft bin design', icon: <HiOutlineShieldCheck /> },
  { value: 'FRLS', label: 'Grade Wiring', desc: 'Flame Retardant Low Smoke internal wiring for fire safety compliance', icon: <HiOutlineLightBulb /> },
  { value: 'Class I', label: 'Earthed Protection', desc: 'Full surge, short circuit, overvoltage and overload protection system', icon: <HiOutlineCube /> },
  { value: 'LED', label: 'Illumination', desc: 'Energy efficient LED lighting for product visibility and low power draw', icon: <HiOutlineLightBulb /> },
];

const highlights = [
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Security & Protection',
    items: ['Anti-theft Product Bin Design', 'Optional Additional Bin Cover', 'Dual Lock Provision (Mechanical + Electrical)', 'VMC & Electronics Safety Shielding'],
  },
  {
    icon: <HiOutlineChip />,
    title: 'Smart Alerts & Remote Control',
    items: ['Remote On/Off, Configuration, Dispensing', 'Motor Test & Faulty Motor Detection', 'Vend & Door Sensor Alerts', 'Temperature Monitoring Alerts'],
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'Electrical Safety',
    items: ['Surge & Short Circuit Protection', 'Overvoltage & Overload Protection', 'Over Temperature Protection', 'Increased Lifespan & Stable Operation'],
  },
];

export default function Products() {
  return (
    <main>
      <SEOHead
        title="Products"
        description="Advikon smart vending machines — combo, beverage, and snack configurations. 3-wide to 5-wide, IoT-enabled, with optional touch screens. 100% Made in India."
      />
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-label" data-aos="fade-up">Our Products</span>
          <h1 className="page-title" data-aos="fade-up" data-aos-delay="100">Future-Ready Smart<br />Vending Solutions</h1>
          <p className="page-desc">
            Intelligent, modular, and retrofit-compatible vending machines engineered
            for operational excellence. Available in multiple configurations for every location.
          </p>
        </div>
      </section>

      {/* Machine Cards */}
      <section className="section">
        <div className="container">
          <div className="machines-list">
            {machines.map((m, i) => (
              <div key={m.title} className={`machine-card ${i % 2 === 1 ? 'reverse' : ''}`} data-aos="fade-up">
                <div className="machine-info">
                  <span className="product-tag">{m.tag}</span>
                  <h2>{m.title}</h2>
                  <p className="machine-subtitle">{m.subtitle}</p>
                  <p className="machine-desc">{m.desc}</p>
                  <ul className="machine-features">
                    {m.features.map((f) => (
                      <li key={f}><HiCheck className="check-icon" /> {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>
                    Request Quote <HiArrowRight />
                  </Link>
                </div>
                <div className="machine-visual">
                  <div className="machine-visual-box">
                    {m.svg}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Key Highlights</span>
            <h2 className="section-title">Built for Security, Intelligence & Safety</h2>
          </div>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <ul>
                  {h.items.map((item) => (
                    <li key={item}><HiCheck className="check-icon" /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section specs-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label specs-label">Specifications</span>
            <h2 className="section-title specs-title">Technical Specifications</h2>
            <p className="section-subtitle specs-subtitle">
              Complete technical details for all Advikon vending machine configurations.
            </p>
          </div>
          <div className="bento-grid" data-aos="fade-up" data-aos-delay="100">
            {bentoSpecs.map((spec, i) => (
              <div key={i} className="bento-card">
                <div className="bento-accent" />
                <div className="bento-icon">{spec.icon}</div>
                <span className="bento-value">{spec.value}</span>
                <span className="bento-label">{spec.label}</span>
                <p className="bento-desc">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retrofit */}
      <section className="section retrofit-section">
        <div className="container">
          <div className="retrofit-grid">
            <div>
              <span className="section-label">Retrofit Compatible</span>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Upgrade Smartly. Operate Efficiently. Scale Confidently.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
                Advikon machines are designed to support both new deployments and
                modernization of existing machines. No need to replace your entire fleet.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Learn More <HiArrowRight />
              </Link>
            </div>
            <div className="retrofit-checks">
              {[
                'Multiple Spiral Motor Compatibility',
                'Electrical System Compatibility',
                'Electronics & VMC Compatibility',
                'Software Platform Compatibility',
                'Mechanical Hardware Adaptability',
              ].map((item) => (
                <div key={item} className="retrofit-item">
                  <HiCheck className="retrofit-check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Need a Custom Configuration?</h2>
          <p>
            We design solutions for corporate offices, hospitals, universities,
            factories, retail spaces, and more.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us <HiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
