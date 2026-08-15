import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Guidelines from './pages/Guidelines';
import Local from './pages/Local';
import ListeningAdventure from './pages/ListeningAdventure';
import KickstarterGuide from './pages/KickstarterGuide';

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/local" element={<Local />} />
            <Route path="/listening-adventure" element={<ListeningAdventure />} />
            <Route path="/ks-guide" element={<KickstarterGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;