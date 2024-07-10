
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Password from './Password'
import { server } from './host'

const Edit = () => {

  const data = {
    userid:"",
    post :""
  }
const navigate = useNavigate()
const {id} = useParams()
const [getone,setgetone]= useState(data)

const changed = (e)=>{
  const {name, value} = e.target ;
  setgetone({...getone,[name]:value})
}

useEffect(()=>{
  const getone = async ()=>{

    await axios.get(`${server}/getone/${id}`).then((result)=>{

      if(result){
        
  
        setgetone(result.data)
      }
    })
  }
getone()
},[id])

const submitpost =async (e)=>{
  e.preventDefault()
  
  await axios.put(`${server}/update/${id}`, getone).then(result=>{
  
  if(result.data=="update"){
      toast.success("post is completed" ,{position:'bottom-right'})
  navigate(`/PostPage`)
  }
else{

  toast.error("not update",{position:'center'})
}
  }).catch(()=>{
     return alert("data is not saveed")
  })
  
  }




  return (
    <div>

      <Password/>
<div className="edit">

<section className="sign">

    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>
      <form onSubmit={submitpost}>
        <h1>post your blog</h1>
<br />
<br />

<label htmlFor="userid">user id<span>*</span></label>
<br />


<input type="text"  
placeholder='your userid' 
autoComplete='off'
value={getone.userid}
onChange={changed}
id='email' name='email' 

/>

<br />



<div className="set">
  <h2>new user<span><Link to={"/Sign"}> again post <span>*</span></Link></span></h2>
</div>

<label htmlFor="post">posts:-<span>*</span></label>
<textarea
 name="post" 
 placeholder='write here' 
 rows={5}
 value={getone.post}
onChange={changed}

 id="post">
  </textarea>

<br />

<input type="submit" value="submit your post" id='submit'/>


      </form>
    </div>
  </section>
   </div>
</div>


  )
}

export default Edit