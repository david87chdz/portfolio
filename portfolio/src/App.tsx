import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav } from './components/shared/Nav';
import { Footer } from './components/shared/Footer';
import { Home } from './pages/Home';
import { Projects as ProjectsPage } from './pages/Projects';
import { Curriculum } from './pages/Curriculum';
import { Blog } from './pages/Blog';
import { useVisits } from './hooks/useVisits';
import './App.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

function App() {
  const { visits } = useVisits();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div>
      <Nav />
      <main className="p-4 max-w-screen-xl mx-auto flex-1 md:p-6">
        <p className="text-center text-lg mb-4">Número de visitas: {visits}</p>
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
