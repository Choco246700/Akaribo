import React, { useState } from 'react';
import { ChevronDown, Search, ArrowLeft, HelpCircle, ArrowRight } from 'lucide-react';
import './Faq.css';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

interface FaqProps {
  setCurrentPage: (page: 'home' | 'faq' | 'contact') => void;
  setContactSubject: (subject: 'investment' | 'fleet' | 'logistics' | 'general' | 'schedule') => void;
  setContactMessage: (message: string) => void;
}

export const Faq: React.FC<FaqProps> = ({ setCurrentPage, setContactSubject, setContactMessage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      category: 'investment',
      question: 'How does the commercial vehicle investment programme work?',
      answer: 'Investors purchase approved commercial vehicle models (such as the Toyota HiAce 14-seater). These vehicles are leased to Akaribo Transport & Logistics under a structured operational agreement. We manage the fleet, assign vetted drivers, secure corporate cargo/passenger contracts, and distribute monthly profit returns.'
    },
    {
      category: 'investment',
      question: 'What is the minimum capital required to start?',
      answer: 'The minimum investment corresponds to the purchase price of one approved commercial vehicle. We coordinate directly with local dealerships to secure fleet discounts for our investors, and handle all registrations and license compliance.'
    },
    {
      category: 'investment',
      question: 'Can I invest in multiple vehicles?',
      answer: 'Yes. Investment opportunities may be structured for individuals or groups depending on availability.'
    },
    {
      category: 'investment',
      question: 'How do I get detailed information?',
      answer: 'Detailed investment documents are shared after an initial consultation.'
    },
    {
      category: 'operations',
      question: 'Who manages operations?',
      answer: 'Akaribo Transport & Logistics oversees the management and coordination of commercial operations through established industry partnerships.'
    },
    {
      category: 'operations',
      question: 'Who handles driver recruitment and vehicle maintenance?',
      answer: 'Akaribo handles the complete operational lifecycle. This includes driver vetting, training, route scheduling, comprehensive commercial insurance, regular scheduled servicing, and repair operations.'
    },
    {
      category: 'operations',
      question: 'How are vehicles protected during operations?',
      answer: 'Every vehicle in our fleet is equipped with real-time GPS tracking, active geofencing, and speed governors. We enforce strict driver code-of-conduct policies and monitor vehicle diagnostics remotely to prevent misuse.'
    },
    {
      category: 'returns',
      question: 'When and how are profit distributions paid?',
      answer: 'Profit distributions are calculated monthly based on vehicle mileage and active contracts. Earnings are paid directly to your nominated bank account by the 10th of each month, accompanied by detailed operational and financial statements.'
    },
    {
      category: 'returns',
      question: 'How are investors updated?',
      answer: 'Investors receive regular operational and financial reports.'
    },
    {
      category: 'returns',
      question: 'What is the typical lease agreement duration?',
      answer: 'Our standard operational lease agreements run for 24 to 36 months. At the end of the term, investors have the option to renew the lease, contract for a new vehicle, or retrieve/sell the asset.'
    },
    {
      category: 'security',
      question: 'Do investors own the vehicles?',
      answer: 'Yes. Investors retain ownership of their vehicles throughout the investment period.'
    },
    {
      category: 'security',
      question: 'What happens if a vehicle is involved in an accident?',
      answer: 'All fleet vehicles are covered under comprehensive commercial vehicle insurance. In the event of an incident, our operations team coordinates emergency response, insurance claims, and vehicle repairs. Loss-of-use coverage minimizes payout disruptions.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'investment', label: 'Investment' },
    { id: 'operations', label: 'Operations' },
    { id: 'returns', label: 'Returns & Payouts' },
    { id: 'security', label: 'Security & Insurance' }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAskDirectlyClick = () => {
    setContactSubject('general');
    setContactMessage(searchQuery);
    setCurrentPage('contact');
    setTimeout(() => {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  return (
    <main className="faq-page">
      {/* Decorative background blur shapes */}
      <div className="faq-bg-blur blur-1"></div>
      <div className="faq-bg-blur blur-2"></div>

      <div className="faq-container">
        <header className="faq-header">
          <HelpCircle className="faq-icon-decor" size={48} />
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our fleet operations and investment structure.</p>
        </header>

        {/* Search & Filter Bar */}
        <div className="faq-controls">
          <div className="faq-search-wrapper">
            <Search className="faq-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
              aria-label="Search FAQs"
            />
          </div>

          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setExpandedIndex(null);
                }}
                className={`faq-cat-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-item-card ${isExpanded ? 'expanded' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isExpanded}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className="faq-chevron" size={20} />
                  </button>
                  <div className="faq-answer-panel">
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-empty">
              <p>No results found for "{searchQuery}". Try adjusting your keywords or category.</p>
              <button 
                onClick={handleAskDirectlyClick}
                className="faq-empty-btn"
              >
                Ask via Email <ArrowRight className="btn-arrow" size={16} />
              </button>
            </div>
          )}
        </div>

        <div className="faq-back-container">
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="faq-back-btn"
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>
      </div>
    </main>
  );
};

export default Faq;
