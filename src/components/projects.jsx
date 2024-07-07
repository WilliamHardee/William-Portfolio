import React from 'react'
import { useRef } from 'react'
import { projects } from './Data'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './projectCard'

function Projects() {
  const [ref ,inView, entry] = useInView();
  const nodeRef = useRef(null)
  return (
    <div className='projects'>
        <h1>Projects</h1>
      <CSSTransition nodeRef={nodeRef} in={inView} timeout={3000} classNames="projCard">
      <div ref={ref}>
        <div ref={nodeRef} className='project-list'>
              {projects.map(proj => (

                  <ProjectCard key={proj.title} title={proj.title} description={proj.description} skill={proj.skill}/>

              ))}
          </div>
        </div>
      </CSSTransition>
    </div>

  )
}

export default Projects