import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import { server } from './host'

const Password = () => {
  const {id} = useParams()
  
  const [userid,setuserid] = useState("")
  const [password,setpassword] = useState("")
  const [dis,setdis] = useState("initial")

  
  const verifypassword =async (e)=>{
    e.preventDefault()
    await axios.post(`${server}/verifypassword/${id}`,{userid,password}).then(result=>{
       if(result.data=="pass"){
        setdis("none")
        toast.success("WELCOME ",{position:'top-center'})
      }
      else {

        toast.error(result.data.msg,{position:"top-center"})
      }
    }).catch(()=>{
      toast.error("SERVER ERROR",{position:"top-center"})
      
})
}

  return (
    <div>

    <section className="sign" id='pass-box' style={{display:dis}}>
    
        <div className="sign-box" id='pass'>
     <Link to={"/"}> <i class="ri-close-line"></i></Link>
          <form >
      
            <h1 ><span>*</span>verify user<span>*</span></h1>
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
    <h2>genrate password<span><Link to={"/Sign"}>  register now <span>*</span></Link></span></h2>
    <h2><Link to={`/forget-password/${id}`}>forget passwrod<span>*</span></Link></h2>
    </div>
    
  
    <br />
  <div className="btns">


   <Link to={'/'}> <button className="submit-btn" >cancel</button></Link>
    <button className="submit-btn" onClick={verifypassword} style={{backgroundColor:"blue"}}>submit</button>
  </div>
          </form>
    
        </div>
      </section>
    </div>
  )
}

export default Password