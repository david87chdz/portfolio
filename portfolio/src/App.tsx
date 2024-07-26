import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav } from './components/shared/Nav';
import { Footer } from './components/shared/Footer';
import { Home } from './pages/Home';
import { Projects as ProjectsPage } from './pages/Projects';
import { Curriculum } from './pages/Curriculum';
import { Blog } from './pages/Blog';
import usePageVisibility from './hooks/usePageVisibility'; // Importa el hook
import './App.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import ReactGA from 'react-ga4';

// Asegúrate de que la variable de entorno está correctamente cargada
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
console.log('Google Analytics Tracking ID:', TRACKING_ID);
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
} else {
  console.error('Google Analytics Tracking ID is not defined');
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  usePageVisibility(); // Usa el hook

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <div>
      <Nav onClose={handleNavClose} />
      <main
        className={`p-4 max-w-screen-xl mx-auto flex-1 transition-all 
          ${navOpen ? 'pt-96 sm:pt-96 md:pt-300 lg:pt-32' : 'pt-36 sm:pt-36 md:pt-20 lg:pt-15'}
        `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<Curriculum />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
