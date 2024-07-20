import { useState } from 'react'

import { Description} from './components/Description.tsx'
import { useVisits } from './hooks/useVisits.ts'
import { useTheme } from './hooks/useTheme.ts'
import { Developer } from './components/PortfolioCode.tsx'
import './App.css'
import { Contact } from './components/Contact.tsx'
import { Social } from './components/Social.tsx'
import { Image } from './components/Image.tsx'
import { Proyects } from './components/Proyects.tsx'
import { Link, Route, Routes } from 'react-router-dom'
import { Projects as ProjectsPage } from './pages/Projects.tsx'
import { Home } from './pages/Home.tsx'
function App() {
  const { visits } = useVisits()
  const [toggleTheme] = useTheme();
  return (
   <div>
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
        <Route path="/contact" element={<Contact />} />
    </Routes>

   </div>

  )
}

export default App
