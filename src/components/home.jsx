import React from 'react'
import Button from './button'
function Home() {
  return (
    <div className="home">
        <div>
            <h3>Hello, I am</h3>
            <h1> William Hardee</h1>
            <div className='container'>
                  <Button text="About Me"/>
                  <Button text="Projects"/>
                  <Button text="Contact"/>
                
            </div>
            
        </div>
        <div className='orbit'>
          <div className='planet'></div>
          <img src='/pic-modified.png' className='selfImage'></img>
        </div>
        
    </div>
  )
}

export default Home