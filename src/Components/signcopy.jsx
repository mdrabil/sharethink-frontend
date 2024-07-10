import React from "react";
import { Link } from "react-router-dom";

const Sign = () => {



  return (
    <div>
      
  <section className="sign">
    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form >
        <h1>sign in</h1>
<label htmlFor="fullname">full name<span>*</span></label>
<input type="text" 
placeholder='enter your full name' 
autoComplete='off'
name='fname' id='fullname' 

/>
<br />

<label htmlFor="email">email id<span>*</span></label>
<input type="email"  
placeholder='enter your email' 
autoComplete='off'




id='email' name='email' 

/>
<br />

<label htmlFor="number">phone number<span>*</span></label>
<input type="number"  
placeholder='phone number' 
autoComplete='off'



id='number' name='phone' 

/>
<br />

<label htmlFor="password">password<span>*</span></label>
<input type="password"  
placeholder='strong password' 
id='password' name='password' 
autoComplete='off'




/>
<br />

<label htmlFor="cpassword">conform password<span>*</span></label>
<input type="text"  
placeholder='conform password' 
id='cpassword' name='cpassword'





/>
<br />

<input type="submit" id='submit'/>

<div className="set">
  <h2>already user <span><Link to={"/Login"}>login now</Link></span></h2>
</div>

      </form>
    </div>
  </section>
    </div>
  )
}

export default Sign ;