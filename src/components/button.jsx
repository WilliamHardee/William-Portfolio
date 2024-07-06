import React from 'react'

function Button({text, link}) {
  
 

  return (
    <a href={link} target="_blank">
      <div className='button'>
          {text}
      </div>
    </a>
  )
}

export default Button