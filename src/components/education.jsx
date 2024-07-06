import React from 'react'
import { education } from './Data'
import EducationCard from './educationCard'

function Education() {
  return (
      <div className='education' id='education'>
          <h1>Education</h1>
          {education.map((school) => (
              <>
                  <br></br>
                  <EducationCard key={school.school} name={school.school} major={school.major} logo={school.image} info={school.info}/>
              </>
          ))}
      </div>

  )
}

export default Education