
import React from 'react'
import style from '../styles/projectCard.module.css'

function ProjectCard({title, description, skill}) {
  
  return (
    
    <div className={style.project_card}>
        <h3>{title}</h3>
        <div className={style.project_skill_list}>
        {skill.map(icon => (
                <img key={icon.name} className={style.skill_image}src={icon.link}></img>
            ))}
        </div>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard