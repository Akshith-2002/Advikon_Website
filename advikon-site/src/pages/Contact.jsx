import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiGlobe,
  HiArrowRight,
} from 'react-icons/hi';
import './Contact.css';

const contactInfo = [
  {
    icon: <HiPhone />,
    label: 'Phone',
    value: '+91-9818745239',
    href: 'tel:+919818745239',
  },
  {
    icon: <HiMail />,
    label: 'Email',
    value: 'pankaj.kumar@advikon.in',
    href: 'mailto:pankaj.kumar@advikon.in',
  },
  {
    icon: <HiLocationMarker />,
    label: 'Address',
    value: '4/155, Sector 11, Gurugram, Haryana – 122001',
  },
  {
    icon: <HiGlobe />,
    label: 'Website',
    value: 'www.advikon.in',
    href: 'https://www.advikon.in',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:pankaj.kumar@advikon.in?subject=Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Advikon Technologies for smart vending machine inquiries, custom configurations, and partnership opportunities. Gurugram, Haryana."
      />
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1 className="page-title">Let's Talk Vending</h1>
          <p className="page-desc">
            Ready to upgrade your vending operations? Get in touch with our team
            for product inquiries, custom configurations, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container contact-grid">
          {/* Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            <p className="form-desc">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <HiArrowRight />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info-wrapper">
            <h2>Contact Information</h2>
            <p className="info-desc">
              Reach out directly or visit our office in Gurugram.
            </p>
            <div className="contact-info-list">
              {contactInfo.map((c) => (
                <div key={c.label} className="contact-info-card">
                  <div className="contact-info-icon">{c.icon}</div>
                  <div>
                    <span className="contact-info-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} className="contact-info-value" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {c.value}
                      </a>
                    ) : (
                      <span className="contact-info-value">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-person-card">
              <div className="contact-person-avatar">PK</div>
              <div>
                <span className="contact-person-name">Pankaj Kumar</span>
                <span className="contact-person-role">Founder, Advikon Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
