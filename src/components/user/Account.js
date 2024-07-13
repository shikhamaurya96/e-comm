import React from 'react'
import { useState,useEffect } from 'react';
import {
    Card,
    CardBody,
    Typography,
    Spinner
    } from "@material-tailwind/react";

import useAccount from '../utils/useAccount';
const Account = () => {
  const [image,setImage] = useState("./images/profile.webp")
    const token = localStorage.getItem("userToken");
  console.log(token)
  const{name,email,mobile,address,isLoading,fetchAccountData} = useAccount();

    useEffect(()=>{
      fetchAccountData();
    },[])

    const handleFile = async(e)=>{
      //console.log(e.target.files[0])
      const file = e.target.files[0]
      
      if(file){
         const formData = new FormData();
        formData.append("profilePicture",file)
        const data = await fetch("http://localhost:8000/api/v1/user/uploadProfile",{
          method: 'POST',
          body: formData,
          headers:{
            "authorization":"Bearer "+token
          }
        })
        const response = await data.json();
        console.log(response)
          setImage(response.cloudinaryUrl)
      }
        
       
       
    }
   
  return (
    (isLoading===true)?<div className='mt-12'><Spinner className=' m-auto'/></div>:<div className='mt-10 ml-6'>
        <Card className="w-full max-w-[48rem] flex-row h-max">
         <div>
            <img src={image} alt='profile' className='w-36 ml-8 mb-4'/>
            <label htmlFor='input-file' className='border-2 border-black p-2 ml-10 bg-orange-700 text-white' >Update Profile</label><br/>
            <input type='file' id='input-file' className='mt-6 ml-8 invisible' onChange={handleFile}/>
         </div>
      <CardBody className='text-black'>
        <div className='flex m-4'>
        <Typography className='font-bold'>Name :</Typography>
        <span className='ml-4'>{name}</span>
        </div>
        <div className='flex m-4'>
        <Typography className='font-bold'>Email :</Typography>
        <span className='ml-4'>{email}</span>
        </div>
        <div className='flex m-4'>
        <Typography className='font-bold'>Mobile No:</Typography>
        <span className='ml-4'>{mobile}</span>
        </div>
        <div className='flex m-4'>
        <Typography className='font-bold'>Address :</Typography>
        <span className='ml-4'>{address}</span>
        </div>
        
      </CardBody>
    </Card>
    </div>
    
  
  )
}

export default Account