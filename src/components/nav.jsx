import React from 'react'
import style from '../styles/nav.module.css'


function Nav (props) {
  return (
    <nav>
        <ul className={style.nav}>
            {props.children}
        </ul>
    </nav>
  )
}

export default Nav