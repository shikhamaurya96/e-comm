import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addCartData} from '../store/cartSlice'
const useCartItems = ()=>{
      const [cartItems,setCartItems]= useState([]);
      const dispatch = useDispatch();
    const fetchItem = async()=>{
        try{
    const token = localStorage.getItem("userToken")
    const resp = await fetch('http://localhost:8000/api/v1/cart/items',{
        method:"get",
        headers:{
            "content-type":"application/json",
            "authorization":"Bearer "+token
          }
    })
    const data = await resp.json()
      setCartItems(data) 
      dispatch(addCartData(data.length))
     
}
catch(err){
console.log("error",err)
}
}

     return {cartItems,fetchItem}
}
export default useCartItems