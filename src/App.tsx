import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ArtOfMithila from './components/ArtOfMithila';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import DMCAPolicy from './components/legal/DMCAPolicy';
import AccessibilityStatement from './components/legal/AccessibilityStatement';
import RefundPolicy from './components/legal/RefundPolicy';
import ShippingPolicy from './components/legal/ShippingPolicy';

const App: React.FC = () => {
  return (
    <AudioProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/art-of-mithila" element={<ArtOfMithila />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/dmca" element={<DMCAPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
        </Routes>
      </HashRouter>
    </AudioProvider>
  );
};

export default App;
