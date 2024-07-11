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
<Link  to={`/mydetails/${mydata.id}`}><p onClick={window.scroll(0,0)}>{mydata.name}</p></Link>

</div>
</>
  })
  }</p>

  </div>
  <div className="footer-box" id='about-me'>
    <h1>connet to me</h1>
   <div className="footer-name">
   <p><span>COUNTRY / STATE- </span>INDIA / BIHAR <br />PIN:-841439</p>
    <p><span>-CONTACK NO  </span>9801669387</p>
    <p><span>EMAIL :- </span>ermdrabil@gmail.com</p>

   </div>
<br />
  <div className="footer-link">
 <Link to={'https://www.youtube.com/@compare_wale'}>
 <i class="ri-youtube-fill"></i>
 </Link>
 <Link to={'https://www.instagram.com/its_rebelboy_?igsh=MWN0aXlpNG00MG4zMw=='}>
  <i class="ri-instagram-fill"></i>
 </Link>

  <i class="ri-facebook-fill"></i>
  <Link to={'https://www.hipi.co.in/@compare_wale?utm_source=Android&utm_medium=my_profile&utm_campaign=hipi_shared_link'}>
  <i class="ri-film-line"></i>
  </Link>
  </div>
</div>
        </div>
        <div className="copyright">
          <p>@2024 all right receved </p>
          <p>Privacy policy : term and Conditions</p>
          </div>
      </div>
    </div>
  )
}

export default Footer