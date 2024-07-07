import React from 'react'
import { education } from './Data'
import { useInView } from 'react-intersection-observer'
import EducationCard from './educationCard'
import style from '../styles/education.module.css'

function Education() {
    return (
        <div className={style.education}>
            <h1>Education</h1>
            <div className={style.school_container}>
            {education.map((school) => (
                <>
                    <br></br>
                    <EducationCard key={school.school} name={school.school} major={school.major} logo={school.image} info={school.info}/>
                </>
            ))}
          </div>
      </div>

  )
}

export default Education