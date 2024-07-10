import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { server } from './host'

const ResetPassword = () => {
    const navigate = useNavigate()
   const {id} = useParams()
    const [password,setpassword] = useState()
    const [userid,setuserid] = useState()
const submitform =async (e)=>{
    e.preventDefault()

await axios.post(`${server}/reset-password/${id}`,{password,userid}).then((result)=>{

if(result.data=="user"){
    toast.success("user is exist",{position:"top-center"})
navigate('/Loginpost')
}

else{
    toast.error(result.data.msg,{position:"top-center"})


}
}).catch(()=>{
    alert("user not found data nhi aya")
})

}



  return (
    <div>
        <section>
            <div className="sign">

            <div className="sign-box">

                <form onSubmit={submitform}>
                <label htmlFor="text"> <span>new password  </span></label>
                    <input type="text" onChange={(e)=>{setpassword(e.target.value)}} 
                    id='text' name='text' minLength={8} placeholder='enter your new password ' />
              <h1>or</h1>
              <label htmlFor="text"><span>new user id </span></label>
                    <input type="text" minLength={6} onChange={(e)=>{setuserid(e.target.value)}} 
                    id='text' name='text'  placeholder='enter your new user id ' />
              
               <input type="submit" id='submit' />
                </form>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ResetPassword