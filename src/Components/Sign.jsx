import React, {  useContext, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'

import axios from 'axios'
import toast from 'react-hot-toast'
import { server } from './host'
const Sign = () => {

  const navigate = useNavigate()
  const [userid,setuserid] = useState()
  const [email,setemail] = useState()
  const [password,setpassword] = useState()
  const [cpassword,setcpassword] = useState()

const submitform = async (e)=>{
e.preventDefault()
await axios.post(`${server}/signup`,{
  userid,email,password,cpassword
}).then(result=>{


  
if(result.data=="add"){
  toast.success("you can share your post",{position:'botttom-right'},{duration:"30s"})

navigate("/LoginPost")

}
else{

  toast.error(result.data.msg,{position:'top-center'})
}

}).catch(()=>{
  toast.error(result.data.msg,{position:'something went wrong'})

})

}


  return (
    <div>
      
  <section className="sign">
    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form onSubmit={submitform} >
        <h1><span>*</span>create id<span>*</span></h1>
        
<label htmlFor="userid">user id<span>*</span></label>
<input type="text" 
placeholder='create unique id' 
autoComplete='off'
title='User id must be 8 charactor '
name='userid' id='userid' pattern='(?=.*[a-z]).{8,}'
onChange={(e)=>setuserid(e.target.value)}
required/>
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
<input type="text"  
placeholder='strong password' 
id='password' name='password' 
autoComplete='off'
title='Password must be 8 charactor and number'

onChange={(e)=>setpassword(e.target.value)}

pattern='(?=.*\d)(?=.*[a-z]).{8,}'
/>
<br />

<label htmlFor="cpassword">conform password<span>*</span></label>
<input type="text"  
placeholder='conform password' 
id='cpassword' name='cpassword'

onChange={(e)=>setcpassword(e.target.value)}

/>
<br />

<input type="submit" id='submit'/>

<div className="set">
  <h2>already user <span><Link to={"/LoginPost"}>go for post</Link></span></h2>
</div>

      </form>
    </div>
  </section>
    </div>
  )
}

export default Sign ;