import React from 'react'


function Nav (props) {
  return (
    <nav>
        <ul className='nav'>
            {props.children}
        </ul>
    </nav>
  )
}

export default Nav