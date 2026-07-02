import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './Privacy.css';

interface PrivacyProps {
  setCurrentPage: (page: 'home' | 'faq' | 'contact' | 'terms' | 'privacy') => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="legal-page" aria-labelledby="privacy-heading">
      {/* Decorative background blur shapes */}
      <div className="legal-bg-blur blur-1"></div>
      <div className="legal-bg-blur blur-2"></div>

      <div className="legal-container">
        <header className="legal-header">
          <h1 id="privacy-heading">Privacy Policy</h1>
          <p className="legal-meta">Akaribo Transport and Logistics Ltd | Last updated: June 2026</p>
        </header>

        <article className="legal-content glass-panel">
          <section className="legal-section">
            <h2>1. Who We Are</h2>
            <p>
              Akaribo Transport and Logistics Ltd is a transport and fleet management company based in Accra, Ghana. 
              This privacy policy explains how we collect, use, and protect information submitted through our website.
            </p>
            <p>
              If you have questions about this policy, contact us at:<br />
              <strong>Email:</strong> <a href="mailto:akaribo.tl@gmail.com" className="legal-link">akaribo.tl@gmail.com</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>2. What Information We Collect</h2>
            <p>
              We only collect information you voluntarily provide to us. This website has no user accounts, no login system, 
              and no tracking beyond basic analytics.
            </p>
            <p>Through our contact form, we may collect:</p>
            <ul className="legal-list">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>The message or enquiry you submit</li>
            </ul>
            <p>If you subscribe to our newsletter, we collect:</p>
            <ul className="legal-list">
              <li>Your email address</li>
            </ul>
            <p>
              We do not collect sensitive personal data such as financial information, identification documents, 
              or health data through this website.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information you submit solely to:</p>
            <ul className="legal-list">
              <li>
                <strong>Respond to your enquiry</strong> — if you contact us through the form, we will use your details to reply to you
              </li>
              <li>
                <strong>Send newsletters and updates</strong> — if you subscribe, we will send you occasional updates about Akaribo 
                Transport and Logistics, our services, and investment opportunities
              </li>
              <li>
                <strong>Improve our communications</strong> — to understand what topics are relevant to visitors
              </li>
            </ul>
            <p>
              We will never use your information for any purpose beyond what you submitted it for without asking you first.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following bases:</p>
            <ul className="legal-list">
              <li><strong>Consent</strong> — you actively chose to fill in the contact form or subscribe to our newsletter</li>
              <li><strong>Legitimate interest</strong> — to respond to enquiries about our services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Who We Share Your Information With</h2>
            <p>We do not sell, rent, or trade your personal information to any third party.</p>
            <p>We may share your information only with:</p>
            <ul className="legal-list">
              <li>
                <strong>Email service providers</strong> — if we use a third-party platform (such as Mailchimp or similar) to manage 
                newsletter delivery, your email address will be stored on that platform in accordance with their own privacy policy
              </li>
              <li>
                <strong>Legal authorities</strong> — if required to do so by law
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. How Long We Keep Your Information</h2>
            <ul className="legal-list">
              <li>
                <strong>Contact form submissions</strong> — we retain your message and contact details for up to 24 months, 
                or until the matter is resolved, whichever comes first
              </li>
              <li>
                <strong>Newsletter subscriptions</strong> — we retain your email address until you unsubscribe
              </li>
            </ul>
            <p>
              You can ask us to delete your information at any time by emailing us at{' '}
              <a href="mailto:akaribo.tl@gmail.com" className="legal-link">akaribo.tl@gmail.com</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="legal-list">
              <li>Access the personal information we hold about you</li>
              <li>Correct any information that is inaccurate</li>
              <li>Request deletion of your information ("right to be forgotten")</li>
              <li>Withdraw consent at any time — for newsletters, you can unsubscribe using the link in any email we send, or by contacting us directly</li>
              <li>Object to how we use your information</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href="mailto:akaribo.tl@gmail.com" className="legal-link">akaribo.tl@gmail.com</a>. We will respond within 30 days.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Cookies</h2>
            <p>
              This website uses only essential cookies necessary for the site to function. We do not use advertising cookies 
              or cross-site tracking cookies.
            </p>
            <p>
              If we add analytics tools in the future (such as Google Analytics), we will update this policy and, where 
              required, ask for your consent.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Security</h2>
            <p>
              We take reasonable steps to protect any information you submit to us. However, no method of transmission over 
              the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Links to Other Websites</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy practices of those sites 
              and encourage you to read their policies separately.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Our website is not directed at children under the age of 13, and we do not knowingly collect information from children.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with a revised 
              "last updated" date. We encourage you to check this page periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Us</h2>
            <p>For any privacy-related questions or requests:</p>
            <address className="legal-address">
              <strong>Akaribo Transport and Logistics Ltd</strong><br />
              Accra, Ghana<br />
              <strong>Email:</strong> <a href="mailto:akaribo.tl@gmail.com" className="legal-link">akaribo.tl@gmail.com</a>
            </address>
          </section>
        </article>

        <div className="legal-back-container">
          <button 
            onClick={handleBackToHome} 
            className="legal-back-btn"
            aria-label="Return to the homepage"
          >
            <ArrowLeft size={18} aria-hidden="true" /> Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
