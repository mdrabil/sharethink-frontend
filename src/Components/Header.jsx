import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const [color,setcolor] = useState("")
  const menubtn = ()=>{
  
    document.querySelector(".navbar").classList.toggle("active")
  
  
  }
  const navbarbtn= ()=>{
  
    document.querySelector(".navbar").classList.remove("active")
  
  
  }
  return (
    <div>

<header>
   <Link to={"/"}>  
    <div className="logo">
      <img src="images/logo.png" alt="" />
        <h1>share<span>think</span></h1>
    </div>
   </Link>
    <div className="menu">
   <div className="navbar-2">
   <button className="btn">
         <Link to={"/Sign"}>sign in</Link>
          </button>
         
        
          <button className="btn">
          <Link to={"/LoginPost"}>post</Link>
          </button>
   </div>
          <ul className="navbar" onClick={navbarbtn}>
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
    
         
         <Link to={"/Sign"}>
         <h4>Sign in</h4>
         </Link>

         
           <hr />
           <Link to={"/LoginPost"}>
           <h4>post</h4>
           </Link>
          <hr /> 
           <Link to={"/footer"}>
           <h4>footer</h4>
           </Link>
            
          </ul>
          
        <div className="menu-btn">
       <i class="ri-menu-line" onClick={menubtn}></i>

        </div>
    </div>
</header>

    </div>
  )
}

export default Header