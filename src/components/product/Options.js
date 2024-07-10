import React from 'react'
import { NavLink } from 'react-router-dom'
const Options = ({onValueChange}) => {

   
  return (
    <div className='mt-10  border-2'>
       <ul className='flex space-x-4 m-4 '>
        <NavLink ><li className='  ' onClick={()=>onValueChange("all")}>All</li></NavLink>
        <NavLink><li onClick={()=>onValueChange("men")}>Men</li></NavLink>
        <NavLink><li  onClick={()=>onValueChange("women")}>Women</li></NavLink>
        
        <select className='border-2 bg-blue-500 text-white border-gray-500 rounded-md' onChange={(e)=>onValueChange(e.target.value)}>
            <option>Categories</option>
            <option key={"shirt"} value={"shirt"}>Shirt</option>
            <option key={"pant"} value={"pant"}>Pant</option>
            <option key={"jwellery"} value={"jwellery"}>Jwellery</option>
            <option key={"footwear"} value={"footwear"}>Footwear</option>
        </select>
       </ul>
    </div>
  )
}

export default Options