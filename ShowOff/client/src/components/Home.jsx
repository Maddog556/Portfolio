import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa6";
import Navbar from './Navbar'
import Experience from './Experience.jsx'
import Projects from'./Projects.jsx'
import '../css/Home.css'


function Home() {

  return (
    <div className='body'>
        <header className='title-box'>
        <h1 className='name'>Josh Maddox</h1>
        <h3>full stack Web developer</h3>
        <p className='mission'>My mission is to become a team member of amazing people that all 
          love to make websites and to grow as a developer</p>
         <nav className='navbar'>
          <Navbar/>
          </nav>
        <ul className='icons'>
          <FaGithub  href='https://github.com/Maddog556'/>
          <FaLinkedin/>
          <FaInstagram/>
          </ul>
        </header>
        <main>
          <div className='pushDiv'>
            <section id='section-1'><h1>About ME</h1>
            <div id='about'>Being a Marine has instilled in me the core values of teamwork, discipline, and determination. These qualities have seamlessly transferred into my ability to work effectively with team members while building websites. Collaboration is key in both the military and web development. 
            Just as Marines work together towards a common mission, I understand the importance of communication, cooperation, and trust when working on web projects. 
            I value the unique skills and perspectives each team member brings to the table, and I thrive in an environment where ideas are shared and refined through constructive collaboration. 
            Furthermore, my military background has honed my ability to adapt to changing circumstances, maintain focus under pressure, and meet deadlines with precision. This translates into my website development work, where I approach each project with discipline and a results-oriented mindset. 
            Whether it's coordinating tasks, brainstorming ideas, or troubleshooting technical issues, I am committed to delivering exceptional websites that not only meet client requirements but also exceed expectations.</div> </section>
            <section id='section-2'><Experience/></section>
            <section id='section-3'><Projects/></section>
          </div>
        </main>
    </div>
  )
}

export default Home