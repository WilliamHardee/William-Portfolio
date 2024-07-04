import { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/nav'
import Home from './components/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Home/>
    </>
  )
}

export default App
