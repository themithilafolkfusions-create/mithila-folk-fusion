import React from 'react';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import ArtForm from './ArtForm';
import Exhibitions from './Exhibitions';
import ExhibitionsGallery from './ExhibitionsGallery';
import Testimonials from './Testimonials';
import Commission from './Commission';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <ArtForm />
      <Exhibitions />
      <ExhibitionsGallery />
      <Testimonials />
      <Commission />
      <Contact />
      <Footer />

      <BackToTop />
    </>
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
      className="fixed bottom-20 right-6 z-40 w-12 h-12 bg-madhubani-red text-cream flex items-center justify-center hover:bg-madhubani-crimson transition-colors shadow-lg border border-madhubani-yellow/30"
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 16V4M10 4L4 10M10 4L16 10" />
      </svg>
    </button>
  );
};

export default Home;
