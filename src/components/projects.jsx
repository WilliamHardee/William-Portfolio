import React from 'react'
import { projects } from './Data'
import ProjectCard from './projectCard'

function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        {projects.map(proj => (
            <>  
                <br></br>
                <ProjectCard title={proj.title} description={proj.description}/>
            </>
        ))}
    </div>

  )
}

export default Projects