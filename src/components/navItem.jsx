import React from 'react'

function NavItem({text, link}) {
    function handleClick() {
        link.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
      }
    
    return (
        <li onClick={handleClick}>{text}</li>
    )
    }

export default NavItem