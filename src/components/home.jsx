import React from 'react'
import Button from './button'
import { useState, useEffect} from 'react'
import style from '../styles/home.module.css'

function Home() {
  const [loaded, setLoaded] = useState(false)
  useEffect(()=> setLoaded(true), [])
  return (
    <div className={style.home}>
        <div>
            <h3 className={loaded ? style.load_from_left: ''}>Hello, I am</h3>
              <h1> William Hardee</h1>
            <div className={`${style.container} ${loaded ? style.load_from_bottom: ''}`}>
                  <Button text="Resume" link="/William_Resume.pdf"/>
                  <Button text="LinkedIn" link="https://www.linkedin.com/in/william-hardee/"/>
                  <Button text="GitHub" link="https://github.com/WilliamHardee"/>
                
            </div>
            
        </div>
        <div className={style.orbit}>
          <div className={style.planet}></div>
          <img src='/pic-modified.png' className={style.selfImage}/>
        </div>
        
    </div>
  )
}

export default Home