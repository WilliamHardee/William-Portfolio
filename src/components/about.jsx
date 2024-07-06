import React from 'react'
import { skills } from './Data'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react';

function About() {
  const {ref, inView, entry} = useInView();

  return (
    <div className="about-me" id='about-me'>
        <h1>About Me</h1>
        <br></br>
        <p className='myself'>
            I am a junior at CU Boulder studying Computer Science and Statistics. I am
            passionate about learning new things both within and without tech. I am most interested
            in robotics and full stack development. I also enjoy playing videogames, reading, and working
            out.
        </p>
        <br></br>
        <div className='skill-list'>
            <h3 ref={ref}>My Skills:</h3>
            {skills.map(icon => (
                <img key={icon.name} className={"skill-image " + (inView ? "visible" : "hidden")} src={icon.link}></img>
            ))}
        </div>
    </div>
  )
}

export default About