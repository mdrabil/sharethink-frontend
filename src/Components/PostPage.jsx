import axios from 'axios'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import usercontext from '../Context/UserContext'
import { server } from './host'
const PostPage = () => {
const copydata = useRef()
const {fname} = useContext(usercontext)

  const [mypost,setmypost] = useState([])
  const [color,setcolor] = useState("green")

const copyclip = useCallback(()=>{
  copydata.current?.select()
  window.navigator.clipboard.writeText(textarea)
},[])
useEffect(()=>{

const datafun=async ()=>{



  const allpost = await axios.get(`${server}/get`)
setmypost(allpost.data)


}
datafun()

},[])
  return (
    <div>

<section className="post">
  <div className="heading">--:blogs:--</div>
  <div className="post-boxes">




  {
    mypost.map((data,index)=>{
      return <>
   <div className="post-box">
<div className="post-like">
<i className="ri-heart-fill" onClick={()=>setcolor("red")} style={{color:{color}}}></i>
</div>
<div className="blog-post" id='blogs'>

<h1>
  {data.post}
{/* <textarea name="textarea" ref={copydata} rows={10} value={data.post}   id="">

</textarea> */}
</h1>


</div>
   <div className="blog-link">
  <Link to={`/edit/${data._id}`}> <i class="ri-pencil-line"></i></Link>
   <Link to={`/delete/${data._id}`}><i class="ri-delete-bin-5-line"></i></Link>
   <i class="ri-file-copy-fill" onClick={copyclip}></i>
  <h6>{data.userid} <hr /></h6>
   </div>

</div>
</>



  })
}




  </div>
</section>


    </div>
  )
}

export default PostPage