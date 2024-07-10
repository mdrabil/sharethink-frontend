
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Password from './Password'
import { server } from './host'

const Delete = () => {
const navigate = useNavigate()
const [deleteddata,setdeleteddata] = useState([])
useEffect(()=>{
  const getone = async ()=>{

    await axios.get(`${server}/getone/${id}`).then((result)=>{

      if(result){
        
        // alert(result.data)
        setdeleteddata(result.data)
      }
    })
  }
getone()
},[])

const {id} = useParams()

const deleted = async(e)=>{
  e.preventDefault()
await axios.delete(`${server}/delete/${id}`).then((result)=>{
  
if(result.data="delete"){
  toast.success("deleted",{position:'bottom-center'})
  navigate('/')
}
else{
  toast.error("deleted",{position:'bottom-center'})

}
})
}






  return (
    <div>

<section className="sign">
<Password/>

    <div className="sign-box">
 <Link to={"/"}> <i class="ri-close-line"></i></Link>

<div className="text-top"> parmanent delete <hr /></div>

<div className="delete-post">{deleteddata.post}</div>
<div className="btns">
  <div className="submit-btn" style={{backgroundColor:"blue"}}>cancel</div>
  <div className="submit-btn"  onClick={deleted}>delete now</div>
</div>
    </div>
  </section>
</div>


  )
}

export default Delete
