import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Local from './pages/Local';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Local />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;