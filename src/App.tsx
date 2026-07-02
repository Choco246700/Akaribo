import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer/Footer';
import './App.css';

type PageType = 'home' | 'faq' | 'contact' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [contactSubject, setContactSubject] = useState<'investment' | 'fleet' | 'logistics' | 'general' | 'schedule'>('general');
  const [contactMessage, setContactMessage] = useState('');

  // Automatically scroll to top of page on page transition
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    if (page !== 'contact') {
      setContactSubject('general');
      setContactMessage('');
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />
      {currentPage === 'home' && (
        <Home 
          setCurrentPage={handlePageChange} 
          setContactSubject={setContactSubject} 
        />
      )}
      {currentPage === 'faq' && (
        <Faq 
          setCurrentPage={handlePageChange} 
          setContactSubject={setContactSubject}
          setContactMessage={setContactMessage}
        />
      )}
      {currentPage === 'contact' && (
        <Contact 
          setCurrentPage={handlePageChange} 
          initialSubject={contactSubject}
          initialMessage={contactMessage}
        />
      )}
      {currentPage === 'terms' && (
        <Terms setCurrentPage={handlePageChange} />
      )}
      {currentPage === 'privacy' && (
        <Privacy setCurrentPage={handlePageChange} />
      )}
      <Footer currentPage={currentPage} setCurrentPage={handlePageChange} />
    </>
  );
}

export default App;
