import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import Auth from './Auth';
const Signup = () => {
const [username,setuserName] = useState("");
const [email,setEmail] = useState("");
const [mobile,setMobile] = useState("")
const [address,setAddress] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")
const navigate = useNavigate();

const handleSignup = async()=>{
  if(username!=="" && email!=="" && mobile.length!==0 &&address!=="" &&password!=="") {
     if(mobile.length===10){
const errorResult =   Auth(email,password);
  setError(errorResult)
  if(errorResult)return;
  const response = await fetch("http://localhost:8000/api/v1/user/register",{
    method:"post",
    body:JSON.stringify({username,email,mobile,address,password}),
    headers:{
      "content-type":"application/json",
      
    }
  })
  const data = await response.json();
  
  if(data.auth){
    
    localStorage.setItem("userToken",data.auth)
  }
 else{
     navigate("/error",{ state: { error: data.result } })
 }
  console.log(data)
}
else{
  setError("enter correct mobile number")
  return
}
}
else{
  setError("please fill required fields")
  return
}
navigate("/")
}

  return (
    <>
    
    <div className=' flex justify-center bg-gray-400 p-12 mt-8 h-max w-max m-auto'>
    <div className=' border-2 border-black w-max p-9 m-auto bg-white rounded-xl flex justify-center'>
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Sign Up
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Nice to meet you! Enter your details to register.
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Your Name
        </Typography>
        <Input
            size="lg"
            placeholder="Username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
           value={username} onChange={(e)=>setuserName(e.target.value)}/>
           
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
          value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Mobile
          </Typography>
          <Input
          type='number'
            size="lg"
            placeholder="9123667879"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            
          value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Address
          </Typography>
          <Input
            size="lg"
            placeholder="xyz"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
          value={address} onChange={(e)=>setAddress(e.target.value)}/>
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            
          value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {(error!=="")?<Typography className='text-red-500 mt-0'>{error}</Typography>:""}
        </div>
        <Checkbox 
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
             >
              I agree the
              <Link
                to={"/privacy-policy"}
                className="font-medium text-blue-500 transition-colors hover:text-blue-500"
              >
                &nbsp;Terms and Conditions
              </Link>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        
        
        <Button className="mt-6"  fullWidth onClick={handleSignup}>
          sign up
        </Button>
        
        
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to={"/login"} className="font-medium text-blue-500">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
    </div>
    </>
  )
}

export default Signup