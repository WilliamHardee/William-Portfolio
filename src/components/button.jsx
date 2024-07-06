import React from 'react'

function Button({text, toScroll}) {
  
  function scrollTo(where) {
    where.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div onClick={()=> scrollTo(toScroll)}className='button'>
        {text}
    </div>
  )
}

export default Button