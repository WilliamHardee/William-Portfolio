import React from 'react'
import { education } from './Data'
import { useInView } from 'react-intersection-observer'
import EducationCard from './educationCard'

function Education() {
    return (
        <div className='education' id='education'>
            <h1>Education</h1>
            <div className='school-container'>
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