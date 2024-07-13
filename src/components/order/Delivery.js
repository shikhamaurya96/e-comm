import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Spinner
  } from "@material-tailwind/react";
  import useAccount from '../utils/useAccount';
  import useCartItems from '../utils/useCartItems';
const Delivery = () => {
const{name,email,mobile,address,isLoading,fetchAccountData} = useAccount();
const{cartItems,fetchItem} = useCartItems();
useEffect(()=>{
   fetchAccountData();
    fetchItem();
},[])
  return (
    (isLoading===true)?<div className='mt-12'><Spinner className=' m-auto'/></div>:
    <div className='w-3/4 m-auto mt-16 p-4 border-2 bg-gray-300'>
    <Card className="mt-6 w-3/4 m-auto">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Delivery Address
        </Typography>
        <Typography  color="blue-gray" className="mb-2 font-bold">
          {name} | {mobile}
        </Typography>
        
        <Typography>
          {address} 
        </Typography>
        
      </CardBody>
      
    </Card>
    <div className='mt-4'>
    <Card className=" w-3/4 m-auto">
      <CardBody>
        <div className='flex justify-between'>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Total Order Price
        </Typography>
        <Typography variant='h6' color="blue-gray" className="mb-2 font-bold">
         Rs. {cartItems.reduce((sum,a)=>sum+a.price,0)}
        </Typography>
        </div>
        <Typography>
        You saved ₹ 715.00 on this order
        </Typography>
        <CardFooter className="pt-0 mt-12">
        <Button>Order</Button>
      </CardFooter>
      </CardBody>
      
    </Card>
    </div>
    </div>
  )
}

export default Delivery