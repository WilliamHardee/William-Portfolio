import React from 'react'
import { useInView } from 'react-intersection-observer'
import style from '../styles/educationCard.module.css'

function EducationCard ({name, major, logo, info}) {
  const [ref, inView, entry] = useInView()
  return (
    <div ref={ref} className={`${style.education_card} ${inView ? style.from_right: ''}`}>
        <h3>{name}</h3>
        <p>{major}</p>
        <img src={logo} className={style.img}></img>
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