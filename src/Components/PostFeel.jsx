import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { server } from './host'

const PostFeel = () => {

const [post,setpost] = useState()

const sendpost = (e)=>{
e.preventDefault()

axios.post(`${server}/login`, post).then(result=>{

if(result=="post"){
    toast.success("send posted",{position:'top-right'})
}

})
}


  return (
    <div>

<section className="postfeel" id="postfeel">
  <div className="post-box">
  <form action="" onSubmit={sendpost}>
<h2>post your feeling here</h2>
<input type="text" />
<textarea name="post" onChange={(e)=>{setpost(e.target.value)}}  rows={4} cols={40} placeholder='enter here' id=""></textarea>
<input type="submit" id='submit'/>
    </form>
  </div>
</section>


    </div>
  )
}

export default PostFeel