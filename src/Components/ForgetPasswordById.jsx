import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { server } from './host'
const ForgetPasswordById = () => {
const {id} = useParams()
   const navigate = useNavigate()
    const [email,setemail] = useState()
    // const [otpbtn,setotpbtn] = useState("initial")
    const [password,setpassword] = useState()

    const submitform =async (e)=>{
        e.preventDefault()

    await axios.post(`${server}/generate-otp/${id}`,{email,password}).then((result)=>{
    
    if(result.data.status==true){
        toast.success("UPDATE PASSWORD SUCCESSFULL",{position:"top-center"})
    navigate('/')
  
    }
    
    else{
        toast.error(result.data.msg,{position:"top-center"})
    
    
    }
    }).catch(()=>{
        toast.error("SERVER ERROR",{position:"top-center"})
        
    })
    
    }
 



  return (
    <div>
        <section>
            <div className="sign">

            <div className="sign-box">

                <form onSubmit={submitform}>
               <label htmlFor="email">email <span>*</span></label>
            
              
                    <input type="email" onChange={(e)=>{setemail(e.target.value)}} id='email' name='email' placeholder='enter your email' />
           
                    <label htmlFor="otp">new password<span>*</span></label>
                    <input type="text" onChange={(e)=>{setpassword(e.target.value)}} id='otp' name='otp' placeholder='enter your otp' />
             
               <input type="submit" id='submit'/>
                </form>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ForgetPasswordById