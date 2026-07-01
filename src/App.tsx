import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ArtOfMithila from './components/ArtOfMithila';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/art-of-mithila" element={<ArtOfMithila />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
