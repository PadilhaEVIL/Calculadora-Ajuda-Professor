import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'

function App() {
  
  function Saudacao(){
    return <h1>Hello World </h1>
  }

  return (
    <>
     <Saudacao/>
     <Mensagem texto="meu texto"/>
     <Frase/>
     <Calculadora/>
    </>
  )
}

export default App
