import React from 'react'
import NavList from '../user/NavList'
import { Outlet ,Navigate} from 'react-router-dom'
const ProtectedRoute = () => {
    const signupToken = localStorage.getItem("userToken")
   
  return (
    (signupToken) ? <><NavList /><Outlet/></> : <Navigate to={"/signup"}/>
  )
}

export default ProtectedRoute