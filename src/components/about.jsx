import React, { useRef } from 'react'
import { skills } from './Data'
import { useInView } from 'react-intersection-observer'
import style from '../styles/about.module.css'


function About() {
  const [ref, inView, entry] = useInView();
  return (
    <div className={style.about_me}>
        <h1>About Me</h1>
        <br></br>
          <p className={style.myself}>
              I am a junior at CU Boulder studying Computer Science and Statistics. I am
              passionate about learning new things both within and without tech. I am most interested
              in robotics and full stack development. I also enjoy playing videogames, reading, and working
              out.
          </p>
        <br></br>
        <div className={style.skill_list}>
            <h3 ref={ref}>My Skills:</h3>
            {skills.map(icon => (
                <img key={icon.name} className={`${style.skill_image} ${inView ? style.visible : style.hidden}`} src={icon.link}></img>
            ))}
        </div>
    </div>
  )
}

export default About