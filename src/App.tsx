import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Faq from './pages/Faq/Faq';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'faq' | 'contact'>('home');
  const [contactSubject, setContactSubject] = useState<'investment' | 'fleet' | 'logistics' | 'general' | 'schedule'>('general');
  const [contactMessage, setContactMessage] = useState('');

  const handlePageChange = (page: 'home' | 'faq' | 'contact') => {
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
      <Footer currentPage={currentPage} setCurrentPage={handlePageChange} />
    </>
  );
}

export default App;
