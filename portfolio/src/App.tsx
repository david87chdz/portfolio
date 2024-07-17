import { useState } from 'react'
import { useVisits } from './hooks/useVisits'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {

  const { visits } = useVisits()
  const { toogleTheme } = useTheme()
  return (
   <div>
    <h1>
      Bienvenid@ a mi portfolio
    </h1>
      <p> { visits } </p>
      <button onClick={toogleTheme}>Cambiar el tema</button>
   </div>
  )
}

export default App
