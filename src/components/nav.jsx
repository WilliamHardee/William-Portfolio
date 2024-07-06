import React from 'react'


function Nav (props) {
  return (
    <>
        <ul className='nav'>
            {props.children}
        </ul>
    </>
  )
}

export default Nav