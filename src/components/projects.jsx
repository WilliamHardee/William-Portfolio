import React from 'react'
import { projects } from './Data'
import ProjectCard from './projectCard'

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className='project-list'>
            {projects.map(proj => (

                <ProjectCard key={proj.title} title={proj.title} description={proj.description} skill={proj.skill}/>

            ))}
        </div>
    </div>

  )
}

export default Projects