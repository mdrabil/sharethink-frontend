import {Link, useNavigate, useParams} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useState } from 'react'
import { server } from './host'
const PostData = () => {
  const {myemail} = useParams()
const navigate = useNavigate()
const [postdata,setpost] = useState()

const submitpost = (e)=>{
e.preventDefault()

axios.post(`${server}/postdata/${myemail}`,{postdata}).then(result=>{

if(result.data=="added"){
    toast.success("post is completed" ,{position:'top-right'})
navigate('/')
}


}).catch(()=>{
    alert("data is not saveed")
})

}


  return (
    <div>

<section className="sign">

    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form onSubmit={submitpost}>
        <h1>post your blog</h1>


<br />



<div className="set">
  <h2>new user<span><Link to={"/Sign"}>  register now <span>*</span></Link></span></h2>
</div>

<label htmlFor="post">posts:-<span>*</span></label>
<textarea
 name="postdata" 
 placeholder='write here' 
 rows={5}
onChange={(e)=>setpost(e.target.value)}
 id="post">

  </textarea>

<br />

<input type="submit" value="submit your post" id='submit'/>


      </form>
    </div>
  </section>
</div>


  )
}

export default PostData