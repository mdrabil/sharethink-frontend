import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { server } from './host'

const ForgetPassword = () => {

   const navigate = useNavigate()
    const [email,setemail] = useState()
    const [otpbtn,setotpbtn] = useState("initial")
    const [otp,setotp] = useState()
    const generateotp =async (e)=>{
        e.preventDefault()
    
    await axios.post(`${server}/generate-otp`,{email}).then((result)=>{
    
    if(result.data.status==true){
        toast.success("OPT SEND YOUR  REGISTER EMAIL",{position:"top-center"})
    
    setotpbtn("none")
    }
    
    else{
        toast.error(result.data.msg,{position:"top-center"})
    
    
    }
    }).catch(()=>{
        toast.error("invalid user ",{position:"top-center"})
        
    })
    
    }
    const submitform =async (e)=>{
        e.preventDefault()
    
    await axios.post(`${server}/forget-password`,{email,otp}).then((result)=>{
    
    if(result.data.status=="user"){
     
        toast.success("validated",{position:"top-center"})
    navigate(`/reset-password/${result.data.send}`)
    }
    
    else{
        toast.error(result.data.msg,{position:"top-center"})
    
    
    }
    }).catch(()=>{
        toast.error("user not found not go data",{position:'top-center'})
    })
    
    }



  return (
    <div>
        <section>
            <div className="sign">

            <div className="sign-box">

                <form >
               <label htmlFor="email">email <span>*</span></label>
            
               <div className="otp-box">
                    <input type="email" onChange={(e)=>{setemail(e.target.value)}} id='email' name='email' placeholder='enter your email' />
               <div className="otp-btn" style={{display:otpbtn}} onClick={generateotp}><p>send otp</p>
               </div>
               </div>
             
                    <label htmlFor="otp">O T P<span>*</span></label>
                    <input type="number" onChange={(e)=>{setotp(e.target.value)}} id='otp' name='otp' placeholder='enter your otp' />
             
               <input type="submit" id='submit' onClick={submitform}/>
                </form>
            </div>
            </div>
        </section>
    </div>
  )
}

export default ForgetPassword