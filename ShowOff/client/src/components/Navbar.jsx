import React from 'react'
// import { Link, animateScroll as scroll } from "react-scroll";
import '../css/NavBar.css'
import {Link} from 'react-router-dom'

function Navbar() {

    // function toSection(sectionId){
    //     const section = document.getElementById(sectionId);
    //     section.scrollIntoView({behavior:'smooth'})
    // }
    //   this goes inside the link tags==> activeClass="active" to="/section-2"spy={true} smooth={true} offset={-70} duration={500} onClick={toSection('section-2')}
  return (
    <div className='links'>
    <Link className='linksColor'>About Me</Link>
    <Link className='linksColor'>Experience</Link>
    <Link className='linksColor'>Projects</Link>
    </div>
  )
}

export default Navbar

