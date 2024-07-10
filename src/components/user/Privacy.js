import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
const Privacy = () => {
    const navigate = useNavigate()
    const handleBack = ()=>{
         navigate(-1)
    }
  return (
    <div className='m-4 p-4'>
        <h2 className='text-bold text-blue-500'>
            Acceptence of Terms:
        </h2>
        <p >
        By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access or use our services.
        </p>
        <h2 className='text-bold text-blue-500'>
            Description of services:
        </h2>
        <p>
        Our services include items of different category and sell them online. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
        </p>
        <h2 className='text-bold text-blue-500'>
            user accounts:
        </h2>
        <p>
            You may be required to create an account to access certain features of our services. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.

        </p>
        <h2 className='text-bold text-blue-500'>
            user conduct:
        </h2>
        <p>
        You agree not to use our services for any unlawful purpose or in any way that violates these Terms and Conditions. You also agree not to:

Harass, abuse, or harm other users
Violate the rights of third parties
Interfere with or disrupt the operation of our services
Use our services for commercial solicitation without our prior written consent
        </p>
        <Button className='mt-4' onClick={handleBack}>Back</Button>
    </div>
  )
}

export default Privacy