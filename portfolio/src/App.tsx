import { useState } from 'react'
import { Description} from './components/Description.tsx'
import { useVisits } from './hooks/useVisits.ts'
import { useTheme } from './hooks/useTheme.ts'
import { Developer } from './components/PortfolioCode.tsx'
import './App.css'
import { Contact } from './components/Contact.tsx'
import { Social } from './components/Social.tsx'
function App() {
  const { visits } = useVisits()
  const [theme, toggleTheme]: [string, React.MouseEventHandler<HTMLButtonElement>] = useTheme()
  return (
   <div>
    <h1>
    class Portfolio &#123; 
    </h1>
      <p> Número de visitas { visits } </p>
      <button onClick={toggleTheme}>Cambiar el tema</button>
      <Description />
      <Developer />
      <Social/>
      <Contact />
    <h1>
    &#125;
    </h1>
   </div>

  )
}

export default App
