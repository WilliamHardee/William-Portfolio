import React from 'react'
import { useRef } from 'react'
import { projects } from './Data'
import { CSSTransition } from 'react-transition-group'
import { useInView } from 'react-intersection-observer'
import ProjectCard from './projectCard'
import style from '../styles/projects.module.css'

function Projects() {
  const [ref ,inView, entry] = useInView();
  const nodeRef = useRef(null)
  return (
    <div className={style.projects}>
        <h1>Projects</h1>
      <CSSTransition nodeRef={nodeRef} in={inView} timeout={50} classNames={{
        enterActive: style.projCard_enter,
        enterDone: style.projCard_enter_active,
        exitActive: style.projCard_exit,
        exitDone: style.projCard_exit_active
      }}>
      <div ref={ref}>
        <div ref={nodeRef} className={style.project_list}>
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