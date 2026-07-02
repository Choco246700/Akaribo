import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowLeft, CheckCircle } from 'lucide-react';
import './Contact.css';

interface ContactProps {
  setCurrentPage: (page: 'home' | 'faq' | 'contact') => void;
  initialSubject?: 'investment' | 'fleet' | 'logistics' | 'general' | 'schedule';
  initialMessage?: string;
}

export const Contact: React.FC<ContactProps> = ({ setCurrentPage, initialSubject, initialMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject || 'investment');
  const [message, setMessage] = useState(initialMessage || '');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
      if (initialSubject === 'schedule') {
        setMessage('I would like to schedule an initial consultation meeting to discuss commercial vehicle investment opportunities with Akaribo.');
      } else if (initialMessage) {
        setMessage(initialMessage);
      } else {
        setMessage('');
      }
    } else if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialSubject, initialMessage]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message securely to database/API in background
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Clean up fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <main className="contact-page">
      <div className="contact-bg-blur blur-1"></div>
      <div className="contact-bg-blur blur-2"></div>

      <div className="contact-container">
        <header className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have questions about the Investment Programme or Fleet Services? Reach out to our team.</p>
        </header>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-col">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-desc">
              Whether you are looking to invest in a commercial vehicle or need corporate fleet support, we are here to assist.
            </p>

            <div className="info-details-list">
              <div className="info-item">
                <div className="info-icon-wrapper">
                  <MapPin size={22} />
                </div>
                <div className="info-text">
                  <h3>Office Location</h3>
                  <p>Sunkwa road, Osu, Accra, Ghana</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Phone size={22} />
                </div>
                <div className="info-text">
                  <h3>Phone Number</h3>
                  <p>+233 24 949 9518</p>
                  <p>+233 53 481 9667</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div className="info-text">
                  <h3>Email Address</h3>
                  <p>
                    <a href="mailto:akaribo.tl@gmail.com" className="contact-link">
                      akaribo.tl@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <Clock size={22} />
                </div>
                <div className="info-text">
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: Closed</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <h3>LinkedIn Page</h3>
                  <p>
                    <a 
                      href="https://www.linkedin.com/company/akaribo-transport-and-logistics-ltd/about/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      Akaribo Transport & Logistics
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col" id="contact-form-section">
            {submitted ? (
              <div className="contact-success-state">
                <CheckCircle className="success-icon" size={64} />
                <h2>Message Sent!</h2>
                <p>Thank you for contacting Akaribo. An investment consultant will reach out to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="reset-form-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="form-title">Send a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +233 50..."
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Inquiry Subject</label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value as any)}
                  >
                    <option value="investment">Commercial Vehicle Investment</option>
                    <option value="fleet">Fleet Operations & Management</option>
                    <option value="logistics">Logistics Coordination Services</option>
                    <option value="schedule">Schedule an Investor Meeting</option>
                    <option value="general">General Inquiries</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-form-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={16} />}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="contact-back-container">
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="contact-back-btn"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Contact;
