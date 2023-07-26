import React from 'react'
import '../css/Projects.css'

function Projects() {
  return (
    <div className='Projects' >
        <h1 id='sec3Title'>Projects</h1>
        <a id='project1'>FunnyFlix</a>
         <p id='project1'> This is my version of netflix.</p> 
        <div className='Flex-p1'>
            <img id='funny1' 
             src ={''} 
             alt='Img-1'/>
          
            <img id='chuckImg2' 
             src ={''} 
             alt='Img-2'/>
        </div>
        
        <a id='project3'>Zen Garden</a> 
        <p id='project2'> Zen Garden is a heavy Css learning project it was to make you website look like another with out copying the code. </p> 
        <div className='Flex-p1'>
            <img id='funny1' 
             src ={''} 
             alt='Img-1'/>
          
            <img id='chuckImg2' 
             src ={''} 
             alt='Img-2'/>
        </div> 
       
        <a id='project3'>this is project </a>
        <p id='project3'>this is project </p>
        <div className='Flex-p1'>
            <img id='funny1' 
             src ={''} 
             alt='Img-1'/>
          
            <img id='chuckImg2' 
             src ={''} 
             alt='Img-2'/>
        </div> 
        
    </div>
  )
}

export default Projects