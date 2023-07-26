import React from 'react'
import '../css/Experience.css'
import ChucksBeds from '../images/chucksbeds.png'
import ChucksBeds2 from '../images/chucksbeds2.png'
import Cert from '../images/cert.png'


function Experience() {

  return (
    <div className='expDiv'><h1 id='expTitle'>Experience</h1>
      <a id='chucksBeds' href='https://www.chucksbeds.com/'>ChucksBeds.com</a>
      <p id='exp1'>This is a local bed store also a group project using</p> 
          <a href='https://www.squarespace.com/'> 
            <button className='skills' >Square Space
            </button></a>
          <a href='https://www.w3schools.com/css/css_intro.asp'>
              <button className='skills'>CSS
              </button></a>
          <a href='https://www.w3schools.com/html/html_intro.asp'>
              <button className='skills'>HTML
              </button></a>
          <a href='https://www.w3schools.com/js/js_intro.asp'>
              <button className='skills'>Javascript
              </button></a>
        {/* images when clicked on will be a link to the website as well key words content box  */}
        <div className='img-Flex'>
            <img id='chuckImg1' 
             src ={ChucksBeds} 
             alt='Img-1'/>
        
            <img id='chuckImg2' 
             src ={ChucksBeds2} 
             alt='Img-2'/>
        </div>

        <a id='vschool' href='https://vschool.io/?utm_campaign=brand&utm_term=v%20school&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=9527963468&hsa_cam=19846380230&hsa_grp=151002812150&hsa_ad=651646594743&hsa_src=g&hsa_tgt=kwd-356608130362&hsa_kw=v%20school&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwiIOmBhDjARIsAP6YhSU6sJZe6lDmDhcZHRe9tkS_qhNe2jgPP2lZKwt9Zxuoje5ruC8Ftu4aAizHEALw_wcB'>
          V-school.com</a>
        <p id='vsCert'>This is the Online school I used to achive my certifaction in Full statck web development and learned about the MERN stack method.</p>
        
        <img id='certImg' 
             src ={Cert} 
             alt='Img-3'/>
        
        <h1>Methods taught in V-school</h1>
        <a href='https://www.w3schools.com/css/css_intro.asp'>
              <button className='skills'>CSS
              </button></a>
          <a href='https://www.w3schools.com/html/html_intro.asp'>
              <button className='skills'>HTML
              </button></a>
          <a href='https://www.w3schools.com/js/js_intro.asp'>
              <button className='skills'>Javascript
              </button></a>
              <a href='https://www.geeksforgeeks.org/mern-stack/'>
              <button className='skills'>MERN Stack
              </button></a>
          
    </div>
  )
}


export default Experience

