import { useState } from 'react'


import { useVisits } from './hooks/useVisits.ts'
import { useTheme } from './hooks/useTheme.ts'

import './App.css'


import { Link, Route, Routes } from 'react-router-dom'
import { Projects as ProjectsPage } from './pages/Projects.tsx'
import { Home} from './pages/Home.tsx'
import { Curriculum } from './pages/Curriculum.tsx'
import { Blog } from './pages/Blog.tsx'
import { Nav } from './components/shared/Nav.tsx'

function App() {
  const { visits } = useVisits()
  const [toggleTheme] = useTheme();
  return (
   <div>
    <Nav />
    <h1>
    class Portfolio &#123; 
    </h1>
      <p> Número de visitas { visits } </p>
      <button onClick={ toggleTheme }>Cambiar el tema</button>

    <h1>
    &#125;
    </h1>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<Curriculum />} />
        <Route path="/blog" element={<Blog />} />
    </Routes>

   </div>

  )
}

export default App
