
import Nav from './components/nav'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import Projects from './components/projects'
import { useRef } from 'react'
import globalStyle from './styles/global.module.css'
import Education from './components/education'
import Divider from './components/divider'
import NavItem from './components/navItem'

function App() {

  const aboutRef = useRef(null)
  const educationRef = useRef(null)
  const projectRef = useRef(null)
  const homeRef = useRef(null)


  return (
    
    <>
      <Nav>
        <NavItem link={aboutRef} text="About Me"/>
        <NavItem link={educationRef} text="Education"/>
        <NavItem link={projectRef} text="Projects"/>
      </Nav>
      <Divider/>
      <div ref={homeRef}>
        <Home/>
      </div> 
      <Divider/>
      <div ref={aboutRef}>
        <About/>
      </div>
      <Divider/>
      <div ref={educationRef}>
        <Education/>
      </div>
      <Divider/>
      <div ref={projectRef}>
        <Projects/>
      </div>
      <Divider/>

      <Nav>
        <NavItem link={homeRef} text="To Top"/>
      </Nav>
    </>
  )
}

export default App
