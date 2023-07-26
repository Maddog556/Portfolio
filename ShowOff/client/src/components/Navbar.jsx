import React from 'react'

import '../css/NavBar.css'


function Navbar() {

    
  return (
    <div className='header-area' >
    <ul>
    <li className='scroll-to-section'><a className='navLinks' href='#section-1'> About Me</a></li>
    <li className='scroll-to-section'><a className='navLinks' href='#section-2'> Experience</a></li>
    <li className='scroll-to-section'><a className='navLinks' href='#section-3'> Projects</a></li>
    </ul>
    </div>
  )
}

export default Navbar

