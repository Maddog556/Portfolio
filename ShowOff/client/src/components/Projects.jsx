import React from 'react'
import '../css/Projects.css'
import Bounty from'../images/bountyhunter.png'
import ZenG from '../images/zenG.png'

function Projects() {
  return (
    <div className='Projects' >
        <h1 id='sec3Title'>Projects</h1>
        <a className="Pro-titles" id='project1'>FunnyFlix</a>
         <p  className='pros-Texts'id='pro1-text'> This Project is example of connecting to a Third party API and used it by doing a Netflix Clone.</p> 
        <div className='Flex-p1'>
            <img id='funny1' 
             src ={''} 
             alt='Img-1'/>
          
            <img id='chuckImg2' 
             src ={''} 
             alt='Img-2'/>
        </div>
        
        <a  className="Pro-titles"id='project2' href='https://zen-garden556.netlify.app/' target='_blank'>Zen Garden</a> 
        <p  className='pros-Texts'id='pro2-Text'> This project is a heavy Css learning project it was made to look like another website called  
              <a href='https://www.csszengarden.com/' target='_blank'id='Zen-Link'>CSSzengarden</a> with out copying any of the code. Deployed with Netilfy </p> 
        <div className='Flex-p2'>
            <a href='https://zen-garden556.netlify.app/' target='_blank'><img id='zenG' 
             src ={ZenG} 
             /></a>
        </div> 
       
        <a className="Pro-titles" id='project3'  href='https://bounty-hunter-xp2m.onrender.com' target='_blank'>Bounty Hunter</a>
        <p className='pros-Texts' id='project3'>This is project is about the CRUD(Create,Read,update,Delete) method of a restful API. You are able to add any name for the Bounty Hunter to find.Deployed with Render </p>
        <div className='Flex-p1'>
          <a href='https://bounty-hunter-xp2m.onrender.com'target='_blank'>
            <img id='bounty'
            src={Bounty}
            /></a>
        </div> 
        
    </div>
  )
}

export default Projects