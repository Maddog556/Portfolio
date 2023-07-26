import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import Navbar from './Navbar.jsx'
import Experience from './Experience.jsx'
import Projects from'./Projects.jsx'
import '../css/Home.css'



function Home() {
 

  return (
    <div className='body'>
        <header className='title-box'>
        <a href='https://www.linkedin.com/in/maddoxjosh' className='name'>Josh Maddox</a>
        <h3>full stack Web developer</h3>
        <p className='mission'>My mission is to become a team member of amazing people that all 
          love to make websites and to grow as a developer</p>
         <nav className='navbar'>
          <Navbar/>
          </nav>
        <ul className='icons'>
          <a href='https://github.com/Maddog556' className='iconsColor'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/maddoxjosh' className='iconsColor'><FaLinkedin/></a>
          </ul>
        </header>
        <main>
          <div className='pushDiv'>
            <section id='section-1' >
            <h1 id='sec1Title'>About Me</h1>
              <p id='q1' className='question'>Why do I want to be a Web Developer? 
              </p>
              <p id='a1' className='answers'>Reason, why is it allows me to use my creative side and problem solving skills.
                Another reason is when you find the solution to the problem there is no better feeling than solving it. 
              </p>
              <p id='q2' className='question'>Where I plan to grow in?
              </p>
              <p id='a2' className='answers'> I will become a expert with the MERN (MongoDB, Express, React, Node) stack method and to start learning new languages. 
              </p>
              </section>

            <section id='section-2'><Experience/></section>
            <section id='section-3'><Projects/></section>
            <footer className='footer'>This website was made by josh Maddox using VS code and development by Netilfy</footer>
          </div>
        </main>
       
    </div>
  )
}

export default Home