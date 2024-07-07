
import React from 'react'

function ProjectCard({title, description, skill}) {
  
  return (
    
    <div className='project-card'>
        <h3>{title}</h3>
        <div className="project-skill-list">
        {skill.map(icon => (
                <img key={icon.name} className="skill-image" src={icon.link}></img>
            ))}
        </div>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard