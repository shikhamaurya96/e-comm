import React from 'react'
import { useEffect,useState } from 'react'
import CartItemsCard from './CartItemsCard'
import { Spinner, Typography } from '@material-tailwind/react'
import useCartItems from '../utils/useCartItems'
import { useDispatch } from 'react-redux'
import { addCartData} from '../store/cartSlice'
import Order from '../order/Order'
const Cart = () => {
    const token = localStorage.getItem("userToken")
    const [cartItemsList,setCartItemsList]= useState([])
   const {cartItems,fetchItem} = useCartItems();
   const dispatch = useDispatch();
    useEffect(()=>{
    fetchItem() 
     },[]);

     useEffect(()=>{
        setCartItemsList(cartItems)
         },[cartItems]);
   
   async function removeCartItem(productId){
    console.log(productId)
    const resp = await fetch(`http://localhost:8000/api/v1/cart/delete-item/${productId}`,{
        method:"delete",
        headers:{
            "content-type":"application/json",
            "authorization":"Bearer "+token
          }
    })
    const data = await resp.json();
    console.log(data);
    const newItems = cartItemsList.filter((item)=>productId!=item._id);
    setCartItemsList(newItems);
    dispatch(addCartData(newItems.length))
    }
  return (
    (cartItems.length===0)?<Spinner/>:
       <div className='flex justify-between'>
        <div>
        <div className=' flex justify-center'>
        <Typography className='mt-12 font-bold text-red-500 text-md'>My cart items : {cartItemsList.length}</Typography>
       </div>
       
       {
        cartItemsList.map((el)=><CartItemsCard  imageUrl={el.imageUrl} title={el.title} description={el.description} quantity={el.quantity} price={el.price} handleRemoveCartItem={removeCartItem} productId={el._id}/>)  
       }
       </div>
       <div className='m-12  w-96'>
        <Typography className='flex justify-center font-bold text-red-500'>My order</Typography>
       <Order myCartItem={cartItemsList}/>
       </div>
       
        </div>
  )
}

export default Cart