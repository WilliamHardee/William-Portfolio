
import {Route, Routes} from 'react-router-dom'
import Nav from './components/nav'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Projects from './components/projects'

import './App.css'
import Education from './components/education'
import Divider from './components/divider'

function App() {

  return (
    <>
      <Nav/>
      <Divider/>
      <Home/>
      <Divider/>
      <About/>
      <Divider/>
      <Education/>
      <Divider/>
      <Projects/>
      <Divider/>
    </>
  )
}

export default App
