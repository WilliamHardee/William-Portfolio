import React from 'react'

function EducationCard ({name, major, logo, info}) {
  return (
    <div className='education-card'>
        <h3>{name}</h3>
        <p>{major}</p>
        <img src={logo} className='img'></img>
        {info.map(i => (
            <>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
            </>
        ))}
    </div>
  )
}

export default EducationCard