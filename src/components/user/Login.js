import React from 'react'
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
const Login = () => {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("")
const [error,setError] = useState("")
const navigate = useNavigate();

const handleLogin = async()=>{
    if(email!=="" && password!==""){
        
   const response = await fetch("http://localhost:8000/api/v1/user/login",{
    method:"post",
    body:JSON.stringify({email,password}),
    headers:{
        "content-type":"application/json"
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
    setError("please fill both the fields")
    return
  }
  navigate("/")
}
const token = localStorage.getItem("userToken")
  return (
    <div className=' flex justify-center bg-gray-400 p-12 mt-8 h-max w-max m-auto'>
    <div className=' border-2 border-black w-max p-9 m-auto bg-white rounded-xl flex justify-center'>
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Login
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-1 flex flex-col gap-6">
        
           <Typography variant="h6" color="blue-gray" className="-mb-3">
             Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          value={email} onChange={(e)=>setEmail(e.target.value)}/>
         
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {(error!=="")?<Typography className='text-red-500 mt-0'>{error}</Typography>:""}
        </div>
       
        <Button className="mt-6"  fullWidth onClick={handleLogin}>
          login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link to={"/signup"} className="font-medium text-blue-500">
            Sign Up
          </Link>
        </Typography>
        </form>
       
    </Card>
    </div>
    </div>
  )
}

export default Login