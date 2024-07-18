import { useState } from 'react'
import { Description} from './components/Description.tsx'
import { useVisits } from './hooks/useVisits.ts'
import { useTheme } from './hooks/useTheme.ts'
import './App.css'

function App() {
  const { visits } = useVisits()
  const [theme, toggleTheme]: [string, React.MouseEventHandler<HTMLButtonElement>] = useTheme()
  return (
   <div>
    <h1>
      Bienvenid@ a mi portfolio
    </h1>
      <p> { visits } </p>
      <button onClick={toggleTheme}>Cambiar el tema</button>
      <Description />
   </div>
  )
}

export default App
