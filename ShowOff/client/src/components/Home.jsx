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
        <a href='https://www.linkedin.com/in/maddoxjosh' target='_blank' className='name'>Josh Maddox</a>
        <h3>Full-Stack Web Developer</h3>
        <p className='mission'>Hi, I’m Josh a recent graduate of V School’s mastery-based program with 1,000+ hours of Web Development.  
              I’m passionate about both personal and professional growth and I am focused on expanding my knowledge in all aspects of development.</p>
         <nav className='navbar'>
          <Navbar/>
          </nav>
        <ul className='icons'>
          <a href='https://github.com/Maddog556' target='_blank' className='iconsColor'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/maddoxjosh' target='_blank' className='iconsColor'><FaLinkedin/></a>
          </ul>
        </header>
        <main>
          <div className='pushDiv'>
            <section id='section-1' >
            <h1 id='sec1Title'>About Me</h1>
              <p id='q1' className='question'>Why do I want to be a Web Developer? 
              </p>
              <p id='a1' className='answers'>It allows me to use my creative side and problem solving skills while making amazing websites.
                There is something satisfying about finding the solution to a problem when your are developing websites. 
              </p>
              <p id='q2' className='question'>Where I plan to grow in?
              </p>
              <p id='a2' className='answers'> I Plan to grow and become an expert in the skills I have leraned with MERN (MongoDB, Express, React, Node) stack method, HTML, CSS, React, Javascript and to start learning new languages after that. 
              </p>
              <p id='q1' className='question'>Something interesting about yourself. 
              </p>
              <p id='a1' className='answers'>I'm a huge Star Wars fan of the first 6 movies and the tv show can talk to you for hours about them. 
              </p>
              <p id='q1' className='question'>What five words could be used to describe you? 
              </p>
              <p id='a1' className='answers'>Kind, helpful, problem solver, eager, and creative. 
              </p>
              </section>

            <section id='section-2'><Experience/></section>
            <section id='section-3'><Projects/></section>
          </div>
        </main>
       
    </div>
  )
}

export default Home