import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './Terms.css';

interface TermsProps {
  setCurrentPage: (page: 'home' | 'faq' | 'contact' | 'terms' | 'privacy') => void;
}

export const Terms: React.FC<TermsProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="legal-page" aria-labelledby="terms-heading">
      {/* Decorative background blur shapes */}
      <div className="legal-bg-blur blur-1"></div>
      <div className="legal-bg-blur blur-2"></div>

      <div className="legal-container">
        <header className="legal-header">
          <h1 id="terms-heading">Terms of Service</h1>
          <p className="legal-meta">Akaribo Transport and Logistics Ltd | Last updated: June 2026</p>
        </header>

        <article className="legal-content glass-panel">
          <section className="legal-section">
            <h2>1. Who We Are</h2>
            <p>
              Akaribo Transport and Logistics Ltd is a transport and fleet management company based in Accra, Ghana. 
              These terms govern your use of our website.
            </p>
            <p>
              If you have any questions about these terms, contact us at:<br />
              <strong>Email:</strong> <a href="mailto:akaribo.tl@gmail.com" className="legal-link">akaribo.tl@gmail.com</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Acceptance of These Terms</h2>
            <p>
              By visiting or using our website, you agree to these terms. If you do not agree, please do not use the site.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. What Our Website Is</h2>
            <p>Our website is an informational site. It exists to:</p>
            <ul className="legal-list">
              <li>Provide information about Akaribo Transport and Logistics Ltd, our services, and investment opportunities</li>
              <li>Allow visitors to contact us via our contact form</li>
              <li>Allow visitors to subscribe to our newsletter</li>
            </ul>
            <p>
              The website does not offer any products for purchase, does not process payments, and does not create any account or login for users.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. No Investment Advice</h2>
            <p>
              Any financial or investment-related content on this website — including projected returns, revenue figures, and vehicle pricing — is 
              provided for <strong>informational and discussion purposes only</strong>. It does not constitute financial advice, an investment 
              recommendation, or an offer to invest.
            </p>
            <p>
              All figures are based on assumptions current at the time of publication and may change. Before making any investment decision, 
              you should seek independent professional advice appropriate to your circumstances.
            </p>
            <p>
              Akaribo Transport and Logistics Ltd accepts no liability for any decisions made based on information found on this website.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Accuracy of Information</h2>
            <p>
              We take care to keep the information on our website accurate and up to date. However, we make no guarantee that all content 
              is complete, current, or error-free. We reserve the right to update or remove content at any time without notice.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Contact Form and Newsletter</h2>
            <p>When you use our contact form or subscribe to our newsletter, you agree to:</p>
            <ul className="legal-list">
              <li>Provide accurate information about yourself</li>
              <li>Not submit spam, abusive language, or unlawful content</li>
              <li>Not impersonate any other person or entity</li>
            </ul>
            <p>
              We will use the information you submit only as described in our{' '}
              <a href="#privacy" onClick={handleGoToPrivacy} className="legal-link">
                Privacy Policy
              </a>
              .
            </p>
            <p>
              You can unsubscribe from our newsletter at any time using the unsubscribe link in any email we send, or by contacting us directly.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and design — belongs to Akaribo Transport and Logistics Ltd 
              or its licensors and is protected by applicable copyright and intellectual property laws.
            </p>
            <p>
              You may view and share our content for personal, non-commercial purposes, provided you credit Akaribo Transport and Logistics Ltd 
              and do not alter the content. You may not reproduce, republish, or use our content commercially without our written permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. External Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for convenience only. We do not endorse, control, 
              or take responsibility for the content or practices of any external sites. Visiting those sites is at your own risk.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Akaribo Transport and Logistics Ltd will not be liable for:</p>
            <ul className="legal-list">
              <li>Any loss or damage arising from your use of, or inability to use, this website</li>
              <li>Any reliance on information published on this website</li>
              <li>Any interruption, suspension, or errors on the website</li>
            </ul>
            <p>Our website is provided "as is" without warranties of any kind, express or implied.</p>
          </section>

          <section className="legal-section">
            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of Ghana. Any disputes arising from your use of this website will be subject 
              to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Any changes will be posted on this page with a revised "last updated" date. 
              Your continued use of the website after changes are posted means you accept the updated terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>For any questions about these terms:</p>
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

export default Terms;
