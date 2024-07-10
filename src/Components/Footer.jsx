import React, { useState } from 'react'
import biodata from './About-Details'
import { Link } from 'react-router-dom'
const Footer = () => {
  const [data,setdata] = useState(biodata)
  return (
    <div>
      <div className="footer" id="footer">
        <div className="footer-boxes">
      <Link to={'/PostPage'}>
      <div className="footer-box">
          <h1>Related</h1>
          <p>imosnal sayri</p>
          <p>sad sayri</p>
          <p>love story sayri</p>
  
  </div>
      </Link>
  <div className="footer-box">
    <h1>member</h1>
<p>{
  data.map((mydata,index)=>{
return <>
<div className="member-name" onClick={window.scroll(0,0)}>
<Link  to={`/mydetails/${mydata.id}`}><p>{mydata.name}</p></Link>

</div>
</>
  })
  }</p>

  </div>
  <div className="footer-box" id='about-me'>
    <h1>connet to me</h1>
   <div className="footer-name">
   <p><span>vill :- </span>gobinda pur dist-siwan <br />pin:-841439</p>
    <p><span>mobile :- </span>9801669387</p>
    <p><span>email :- </span>ermdrabil@gmail.com</p>

   </div>
<br />
  <div className="footer-link">
  <i class="ri-youtube-fill"></i>
  <i class="ri-instagram-fill"></i>
  <i class="ri-facebook-fill"></i>
  <i class="ri-twitter-fill"></i>
  </div>
</div>
        </div>
        <div className="copyright">
          <p>@2024 all is made by rabil hussain</p>
          <p>rivacy policy : term and Conditions</p>
          </div>
      </div>
    </div>
  )
}

export default Footer