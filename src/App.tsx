import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ArtOfMithila from './components/ArtOfMithila';

const App: React.FC = () => {
  return (
    <AudioProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/art-of-mithila" element={<ArtOfMithila />} />
        </Routes>
      </HashRouter>
    </AudioProvider>
  );
};

export default App;
