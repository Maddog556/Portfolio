import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/NavBar.css'
// import {Link} from 'react-router-dom'

function Navbar() {

    function toSection(sectionId){
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div className='links'>
    <Link activeClass="active" to="/section-1"spy={true} smooth={true} offset={-70} duration={500} onClick={toSection('section-1')}>About Me</Link>
    <Link activeClass="active" to="/section-2"spy={true} smooth={true} offset={-70} duration={500} onClick={toSection('section-2')}>Experience</Link>
    <Link activeClass="active" to="/section-3"spy={true} smooth={true} offset={-70} duration={500} onClick={toSection('section-3')}>Projects</Link>
    </div>
  )
}

export default Navbar

