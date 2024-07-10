import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { server } from './host'
const Login = () => {
const navigate = useNavigate()


const [email,setemail] = useState()
const [password,setpassword] = useState()


const submitform = (e)=>{
e.preventDefault()

axios.post(`${server}/login`,{
email,password
}).then(result=>{

if(result.data=="added"){
  toast.success("user is added in db",{position:'top-right'})

navigate("/")

}
else if(result.data=="already")
toast.success("user is already in db",{position:'top-right'})

})

}


  return (
    <div>
      
  <section className="sign">
    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form onSubmit={submitform}>
        <h1>login now</h1>
<br />
<br />

<label htmlFor="email">email id<span>*</span></label>
<input type="email"  
placeholder='enter your email' 
autoComplete='off'
onChange={(e)=>setemail(e.target.value)}

id='email' name='email' 

/>
<br />



<label htmlFor="password">password<span>*</span></label>
<input type="password"  
placeholder='strong password' 
id='password' name='password' 
autoComplete='off'
onChange={(e)=>setpassword(e.target.value)}


/>

<br />

<input type="submit" id='submit'/>

<div className="set">
  <h2>new user<span><Link to={"/Sign"}>register now</Link></span></h2>
</div>

      </form>
    </div>
  </section>
    </div>
  )
}

export default Login