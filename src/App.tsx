import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import ArtForm from './components/ArtForm';
import Exhibitions from './components/Exhibitions';
import Testimonials from './components/Testimonials';
import Commission from './components/Commission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MadhubaniBorderTop } from './components/MadhubaniBorder';


const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <Navbar isPlaying={isPlaying} togglePlay={togglePlay} />
      <Hero isPlaying={isPlaying} togglePlay={togglePlay} />
      <MadhubaniBorderTop />
      <About />
      <Gallery />
      <ArtForm />
      <Exhibitions />
      <Testimonials />
      <Commission />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};

const BackToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-madhubani-red text-cream flex items-center justify-center hover:bg-madhubani-crimson transition-colors shadow-lg border border-madhubani-yellow/30"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 16V4M10 4L4 10M10 4L16 10" />
      </svg>
    </button>
  );
};

export default App;
