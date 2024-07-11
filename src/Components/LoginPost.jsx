import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { server } from './host'
const LoginPost = () => {
const navigate = useNavigate()
const [userid,setuserid]= useState()
const [password,setpassword]= useState()
const [post,setpost] = useState()

const submitpost =async (e)=>{
e.preventDefault()

await axios.post(`${server}/post`,{userid,password,post}).then(result=>{

if(result.data=="added"){
    toast.success("POST IS SUCCESSFULL" ,{position:'top-center'})
navigate(`/PostPage`)
}
else{

  toast.error(result.data.msg ,{position:'top-center'})
}

// toast.error(result.data.msg,{position:'top-center'})
}).catch(()=>{
toast.error("SERVER ERROR",{position:'top-center'})
  
})

}


  return (
    <div>

<section className="sign">

    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form onSubmit={submitpost}>
        <h1><span>*</span>post your blog<span>*</span></h1>
<br />
<div className="post-check">
<label htmlFor="userid">user id<span>*</span></label>
<br />


<input type="text"  
placeholder='enter your id' 
autoComplete='off'
onChange={(e)=>setuserid(e.target.value)}

id='userid' name='userid' 

/>
</div>
<div className="post-check">

<label htmlFor="password">password<span>*</span></label>
<br />
<input type="text"  
placeholder='your password' 
autoComplete='off'
onChange={(e)=>setpassword(e.target.value)}

id='password' name='password' 

/>
</div>

<div className="set">
  <h2>new user<span><Link to={"/Sign"}> create id<span>*</span></Link></span></h2>
  <h2><span><Link to={"/forget-password"}> forget pasword<span>*</span></Link></span></h2>
</div>

<label htmlFor="post">posts:-<span>*</span></label>
<textarea
 name="post" 
 placeholder='write here' 
 rows={5}
 minLength={30}
 onChange={(e)=>setpost(e.target.value)}
 id="post">
  </textarea>

<br />

<input type="submit" value="submit your post" id='submit' />


      </form>
    </div>
  </section>
</div>


  )
}

export default LoginPost