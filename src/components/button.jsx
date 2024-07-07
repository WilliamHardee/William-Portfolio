import React from 'react'
import style from '../styles/button.module.css'

function Button({text, link}) {
  
 

  return (
    <a href={link} target="_blank">
      <div className={style.button}>
          {text}
      </div>
    </a>
  )
}

export default Button