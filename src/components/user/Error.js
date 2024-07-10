import React from 'react'
import { useLocation } from 'react-router-dom'
const Error = () => {
    const location = useLocation();
    const error = location.state.error;
    console.log(location)
  return (
    <div>
        <h1 className='text-red-500 m-10'>Error : {error}</h1>
    </div>
  )
}

export default Error