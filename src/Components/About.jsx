import React, { useState } from 'react'
import biodata from '../Components/About-Details'
import { useParams } from 'react-router-dom'

const About = () => {
    const {id} = useParams()
const check = biodata.find((e)=>e.id===Number(id))

  return (
    <div>
        <section>
        
<div className="about-boxes">
    <div className="about-box">
        <div className="about-img">
<img src={check.img} alt="" />
        </div>
        <h6> <span>*</span> {check.name} <span>*</span></h6>
        <h2> <span>*</span> {check.post}  <span>*</span></h2>
        
        <p>{check.description} </p>
    </div>
    <div className="about-details">
        <h3>follow me ::--</h3>
    <div className="footer-link">
    <div className="about-links">
  <i class="ri-youtube-fill"></i>
<p>youtube</p>
        </div>
        <div className="about-links">
        <i class="ri-instagram-fill"> </i>
<p>instagram</p>
        </div>
        <div className="about-links">
        <i class="ri-facebook-fill"></i>
<p>facebook</p>
        </div>
        <div className="about-links">
        <i class="ri-twitter-fill"></i>
<p>twitter</p>
        </div>
        

  
 
  </div>
    </div>

    
</div>
        </section>
    </div>
  )
}

export default About