import { useEffect, useState } from 'react';
import { ArrowRight, Truck, Handshake, Settings, Coins, Shield, UserCheck, TrendingUp, Key, FileText, MapPin, ChevronDown } from 'lucide-react';
import toyotaHiace from '../../assets/images/toyota-hiace.png';
import serviceAcquisition from '../../assets/images/service-acquisition.jpg';
import serviceOperations from '../../assets/images/service-operations.jpg';
import serviceLogistics from '../../assets/images/service-logistics.jpg';
import serviceMonitoring from '../../assets/images/service-monitoring.jpg';
import './Home.css';

interface HomeProps {
  setCurrentPage: (page: 'home' | 'faq' | 'contact') => void;
  setContactSubject: (subject: 'investment' | 'fleet' | 'logistics' | 'general' | 'schedule') => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage, setContactSubject }) => {
  const [activeService, setActiveService] = useState(0);

  const handleScheduleClick = () => {
    setContactSubject('schedule');
    setCurrentPage('contact');
    setTimeout(() => {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const servicesData = [
    {
      title: 'Fleet Acquisition Support',
      description: 'Helping organizations procure commercial vehicles.',
      image: serviceAcquisition
    },
    {
      title: 'Fleet Operations Management',
      description: 'Managing drivers, maintenance, compliance, and daily operations.',
      image: serviceOperations
    },
    {
      title: 'Logistics Coordination',
      description: 'Transport and logistics support for businesses.',
      image: serviceLogistics
    },
    {
      title: 'Asset Monitoring & Reporting',
      description: 'Providing transparent operational updates for vehicle owners.',
      image: serviceMonitoring
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.about-card, .how-it-works-card, .benefits-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="home-container">
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1 className="hero-heading">
            Invest In Ghana's <br />
            Growing Transport Economy
          </h1>
          <p className="hero-description">
            Akaribo Transport & Logistics Ltd offers structured vehicle investment opportunities
            backed by professional fleet management, transparent reporting, and long-term
            operational agreements.
          </p>
          <div className="hero-actions">
            <button className="hero-btn hero-btn-primary" onClick={handleScheduleClick}>
              Schedule an Investor Meeting
            </button>
            <button className="hero-btn hero-btn-secondary" onClick={() => scrollToSection('about')}>
              Learn More <ArrowRight className="arrow-icon" size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-container">
          <h2 className="section-title">About Us</h2>
          
          <div className="about-intro">
            <div className="about-intro-title">
              <h3>Why the Company was created</h3>
            </div>
            <div className="about-intro-text">
              <p>
                Akaribo Transport & Logistics Ltd was created to bridge the gap between growing demand 
                for reliable transportation services and professionally managed investment opportunities. 
                We provide transparent, accountable, and efficient transport asset management solutions 
                that create value for both investors and the communities we serve.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To create sustainable transport investment opportunities while delivering safe, efficient, 
                and professionally managed mobility solutions across Ghana.
              </p>
            </div>
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To become Ghana's most trusted transport asset management company.
              </p>
            </div>
            <div className="about-card">
              <h3>Core Values</h3>
              <ul className="values-list">
                <li>Transparency</li>
                <li>Accountability</li>
                <li>Safety</li>
                <li>Innovation</li>
                <li>Partnership</li>
                <li>Excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="investment-section" id="investment">
        <div className="investment-container">
          <div className="investment-content">
            <h2 className="investment-title">Commercial Vehicle Investment Programme</h2>
            <p className="investment-description">
              Investors purchase commercial vehicles which are professionally managed under 
              long-term operational agreements. Our approach combines strong technical expertise with disciplined systems:
            </p>
            <ul className="investment-bullets">
              <li>Real-time monitoring (camera and GPS tracking) for maximum transparency</li>
              <li>Professional driver management and maintenance coordination</li>
              <li>Independent revenue verification and prompt profit distribution</li>
              <li>Partnership with established operators</li>
            </ul>
          </div>
          <div className="investment-image-wrapper">
            <img 
              src={toyotaHiace} 
              alt="Toyota Hiace 14 Seater Minibus" 
              className="investment-image"
            />
          </div>
        </div>
      </section>

      <section className="how-it-works-section" id="how-it-works">
        <div className="how-it-works-container">
          <span className="how-it-works-subtitle">How It Works</span>
          <h2 className="how-it-works-heading">Simple Steps To Start Investing In Transport Assets</h2>
          <p className="how-it-works-desc">
            Follow our structured workflow to purchase, lease, and earn from professionally managed commercial vehicle assets.
          </p>

          <div className="how-it-works-grid">
            <div className="how-it-works-card">
              <div className="step-number">01</div>
              <div className="step-divider"></div>
              <div className="step-header">
                <Truck className="step-icon" size={20} />
                <h3>Purchase a New Commercial Vehicle</h3>
              </div>
              <p>
                Purchase a new commercial vehicle of your choice from our list of approved and recommended models.
              </p>
            </div>

            <div className="how-it-works-card">
              <div className="step-number">02</div>
              <div className="step-divider"></div>
              <div className="step-header">
                <Handshake className="step-icon" size={20} />
                <h3>Lease the Vehicle to Akaribo</h3>
              </div>
              <p>
                Lease the vehicle to Akaribo Transport & Logistics under a structured legal and operational agreement.
              </p>
            </div>

            <div className="how-it-works-card">
              <div className="step-number">03</div>
              <div className="step-divider"></div>
              <div className="step-header">
                <Settings className="step-icon" size={20} />
                <h3>Professional Fleet Management</h3>
              </div>
              <p>
                We handle the complete operations, including tracking, maintenance, driver vetting, and route management.
              </p>
            </div>

            <div className="how-it-works-card">
              <div className="step-number">04</div>
              <div className="step-divider"></div>
              <div className="step-header">
                <Coins className="step-icon" size={20} />
                <h3>Receive Profit Distributions</h3>
              </div>
              <p>
                Receive your monthly profit distributions directly to your account with detailed financial reporting.
              </p>
            </div>
          </div>

          <div className="how-it-works-action">
            <button className="how-it-works-btn" onClick={() => alert('Investor meeting scheduler coming soon!')}>
              Schedule an Investor Meeting <ArrowRight className="arrow-icon" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="benefits-bg-icon icon-1"><Shield /></div>
        <div className="benefits-bg-icon icon-2"><Coins /></div>
        <div className="benefits-bg-icon icon-3"><Key /></div>
        <div className="benefits-bg-icon icon-4"><TrendingUp /></div>
        <div className="benefits-bg-icon icon-5"><MapPin /></div>
        <div className="benefits-bg-icon icon-6"><Truck /></div>
        <div className="benefits-bg-icon icon-7"><FileText /></div>
        <div className="benefits-bg-icon icon-8"><UserCheck /></div>
        <div className="benefits-bg-icon icon-9"><Handshake /></div>
        <div className="benefits-bg-icon icon-10"><Settings /></div>
        <div className="benefits-bg-icon icon-11"><Shield /></div>
        <div className="benefits-bg-icon icon-12"><Coins /></div>
        <div className="benefits-bg-icon icon-13"><Key /></div>
        <div className="benefits-bg-icon icon-14"><TrendingUp /></div>
        <div className="benefits-bg-icon icon-15"><MapPin /></div>
        <div className="benefits-bg-icon icon-16"><Truck /></div>

        <div className="benefits-container">
          <h2 className="benefits-title">Investor Benefits</h2>
          <p className="benefits-description">
            Akaribo partners with investors to deliver reliable yields, professional management, and full asset transparency.
          </p>

          <div className="benefits-grid">
            <div className="benefits-card">
              <h3>Vehicle Ownership Protection</h3>
              <p>Investors retain ownership of their assets throughout the investment period.</p>
            </div>
            <div className="benefits-card">
              <h3>Professional Management</h3>
              <p>Daily operations, administration, and oversight are handled by experienced transport professionals.</p>
            </div>
            <div className="benefits-card">
              <h3>Transparent Reporting</h3>
              <p>Regular operational and financial updates provide visibility into performance.</p>
            </div>
            <div className="benefits-card">
              <h3>Growing Market Demand</h3>
              <p>The intercity transport sector continues to experience strong demand across major economic corridors.</p>
            </div>
          </div>

          <div className="benefits-action">
            <button className="benefits-btn" onClick={handleScheduleClick}>
              Schedule an investor meeting <ArrowRight className="arrow-icon" size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="services-section" id="services">
        <div className="services-container">
          <span className="services-subtitle">Services</span>
          <h2 className="services-heading">Fleet Management Services</h2>
          <p className="services-intro">
            Akaribo provides comprehensive fleet support, combining operational excellence with modern asset monitoring.
          </p>

          {/* Desktop Layout (Hidden on Mobile) */}
          <div className="services-desktop-panel">
            <div className="services-interactive-panel">
              <div className="services-menu">
                {servicesData.map((service, index) => (
                  <button
                    key={index}
                    className={`services-menu-item ${activeService === index ? 'active' : ''}`}
                    onClick={() => setActiveService(index)}
                    onMouseEnter={() => setActiveService(index)}
                    aria-expanded={activeService === index}
                  >
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-menu-title">{service.title}</span>
                  </button>
                ))}
              </div>

              <div className="services-display">
                <div className="services-display-content" key={activeService}>
                  <h3>{servicesData[activeService].title}</h3>
                  <p>{servicesData[activeService].description}</p>
                </div>
                <div className="services-display-image-wrapper">
                  <img 
                    src={servicesData[activeService].image} 
                    alt={servicesData[activeService].title} 
                    className="services-display-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Accordion Layout (Hidden on Desktop) */}
          <div className="services-mobile-accordion">
            {servicesData.map((service, index) => {
              const isOpen = activeService === index;
              return (
                <div 
                  key={index} 
                  className={`services-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="services-accordion-header"
                    onClick={() => setActiveService(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-number">0{index + 1}</span>
                    <span className="accordion-title">{service.title}</span>
                    <ChevronDown className="accordion-chevron" size={18} />
                  </button>
                  <div className="services-accordion-content-wrapper">
                    <div className="services-accordion-content">
                      <p className="services-accordion-desc">{service.description}</p>
                      <div className="services-accordion-image-wrapper">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="services-accordion-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;
