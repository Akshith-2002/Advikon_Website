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
import SmartFridgeSVG from '../assets/SmartFridgeSVG';
import SanitaryMachineSVG from '../assets/SanitaryMachineSVG';
import CustomMachineSVG from '../assets/CustomMachineSVG';
import './Products.css';

const machines = [
  {
    svg: <ComboMachineSVG width={240} height={310} />,
    title: 'Combo Vending Machine',
    subtitle: 'Snack & Beverage Combined',
    desc: 'Our most versatile unit — dispenses both snacks and beverages from a single intelligent machine. Ideal for corporate offices, hospitals, universities, and high-traffic locations.',
    features: ['3-Wide / 4-Wide / 5-Wide options', 'With & Without Storage', 'Optional 10" to 32" Touch Screen', 'LCD Display & Keypad options', 'Multi-vend capability'],
    tag: 'Most Popular',
    specs: [
      { label: 'Type', value: 'Spiral / Coil-based dispensing' },
      { label: 'Product Type', value: 'Snack / Chocolates / Cookies / Tetra / Bottle / Can / PET etc' },
      { label: 'Capacity', value: '300 to 480 drinks based on product size' },
      { label: 'Temperature', value: '4°C to 18°C (cold)' },
      { label: 'Cooling', value: 'Compressor-based refrigeration' },
      { label: 'Power', value: '300W – 750W' },
      { label: 'Supply', value: '220–240V AC, 50Hz, 5 Amp' },
      { label: 'Weight', value: '300 kgs' },
    ],
  },
  {
    svg: <BeverageMachineSVG width={210} height={310} />,
    title: 'Beverage Vending Machine',
    subtitle: 'Dedicated Beverage Dispensing',
    desc: 'Optimized for cold beverage dispensing with advanced air-cooled refrigeration using R134a gas. Perfect for factories, retail spaces, and transport hubs.',
    features: ['4-7 adjustable trays', 'Air-Cooled Refrigeration (R134a)', 'Plug & Play Cooling Unit', 'Multiple Configuration Options', 'Multi-vend capability'],
    tag: 'Beverages',
    specs: [
      { label: 'Type', value: 'Spiral / Coil-based dispensing' },
      { label: 'Product Type', value: 'Bottle / Can / PET / Tetra / Pouch / Cold Beverage' },
      { label: 'Trays', value: '4-7 adjustable trays' },
      { label: 'Capacity', value: '300 to 480 drinks based on product size' },
      { label: 'Temperature', value: '4°C to 18°C (cold)' },
      { label: 'Cooling', value: 'Compressor-based refrigeration' },
      { label: 'Power', value: '300W – 750W' },
      { label: 'Supply', value: '220–240V AC, 50Hz, 5 Amp' },
      { label: 'Weight', value: '200 – 300 kgs' },
    ],
  },
  {
    svg: <SnackMachineSVG width={220} height={310} />,
    title: 'Snack Vending Machine',
    subtitle: 'High-Capacity Snack Dispensing',
    desc: 'Engineered for maximum capacity with mechanically slanted trays for easy refilling. Supports up to 100 motors for diverse product offerings.',
    features: ['4-7 adjustable trays', 'Supports up to 100 Motors', 'Slanted Tray Design', '3-Axis Precision Adjustment', 'Multi-vend capability'],
    tag: 'Snacks',
    specs: [
      { label: 'Type', value: 'Spiral / Coil-based dispensing' },
      { label: 'Product Type', value: 'Chips, Namkeens, chocolates, biscuits, packaged food' },
      { label: 'Trays', value: '4-7 adjustable trays' },
      { label: 'Capacity', value: '200 to 500 snacks based on product size' },
      { label: 'Temperature', value: '22°C to 32°C (Ambient)' },
      { label: 'Power', value: '200W – 250W' },
      { label: 'Supply', value: '220–240V AC, 50Hz, 5 Amp' },
      { label: 'Weight', value: '200 – 250 kgs' },
    ],
  },
];

const additionalMachines = [
  {
    title: 'AI-Based Smart Refrigerator',
    desc: 'AI-powered smart cooling with intelligent inventory management and predictive restocking.',
    svg: <SmartFridgeSVG width={180} height={230} />,
  },
  {
    title: 'Sanitary Napkin Vending Machine',
    desc: 'Compact, reliable dispenser designed for schools, colleges, offices, and public facilities.',
    svg: <SanitaryMachineSVG width={180} height={230} />,
  },
  {
    title: 'Customized Machines',
    desc: 'Tailor-made vending solutions designed and built as per specific client requirements.',
    svg: <CustomMachineSVG width={180} height={230} />,
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
        description="Advikon smart vending machines — combo, beverage, snack, AI smart refrigerator, sanitary napkin, and customized configurations. IoT-enabled, 100% Made in India."
      />
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-label" data-aos="fade-up">Our Products</span>
          <h1 className="page-title" data-aos="fade-up" data-aos-delay="100">Future-Ready Smart<br />Vending Solutions</h1>
          <p className="page-desc">
            Advikon offers a complete range of vending solutions including snack, beverage, and combo machines
            designed for high efficiency, smart monitoring, and maximum revenue generation.
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

                  {/* Inline specs table */}
                  <div className="machine-specs-table">
                    {m.specs.map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: 16 }}>
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

      {/* Additional Machine Types */}
      <section className="section additional-machines-section">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="section-label">Also Available</span>
            <h2 className="section-title">More Vending Solutions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
              Customized machines built for specific business needs and unique deployment scenarios.
            </p>
          </div>
          <div className="additional-grid">
            {additionalMachines.map((m, i) => (
              <div key={m.title} className="additional-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="additional-visual">{m.svg}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <Link to="/contact" className="product-link">
                  Enquire Now <HiArrowRight className="btn-arrow" />
                </Link>
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
                modernization of existing machines. Plug & play compatibility of MDB devices.
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
                'Plug & Play MDB Device Support',
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
