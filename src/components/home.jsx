import React from 'react'
import Button from './button'
import { useState, useEffect} from 'react'

function Home() {
  const [loaded, setLoaded] = useState(false)
  useEffect(()=> setLoaded(true), [])
  return (
    <div className="home">
        <div>
            <h3 className={loaded ? 'load-from-left': ''}>Hello, I am</h3>
              <h1> William Hardee</h1>
            <div className={`container ' ${loaded ? 'load-from-bottom': ''}`}>
                  <Button text="Resume" link="/William_Resume.pdf"/>
                  <Button text="LinkedIn" link="https://www.linkedin.com/in/william-hardee/"/>
                  <Button text="GitHub" link="https://github.com/WilliamHardee"/>
                
            </div>
            
        </div>
        <div className='orbit'>
          <div className='planet'></div>
          <img src='/pic-modified.png' className='selfImage'/>
        </div>
        
    </div>
  )
}

export default Home