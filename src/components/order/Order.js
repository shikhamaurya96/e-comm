import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const Order = ({myCartItem}) => {
  return (

    <Card color="" variant="gradient" className="w-full  p-8">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color=""
          className="font-normal uppercase"
        >
          Price details ({myCartItem.length} items)
        </Typography>
        
        <Typography
          variant="h1"
          color=""
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">₨ {myCartItem.reduce((sum,a)=>sum+a.price,0)}</span>
         
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        
        <ul className="flex flex-col gap-4">
        <li className="flex  justify-between items-center gap-4">
            
            <Typography className="font-bold">Item</Typography>
            <span className='font-bold'>Price (Rs.)</span>
          </li> 
        {myCartItem.map((item)=><li className="flex items-center justify-between gap-4">
            
            <Typography className="font-normal">{item.title}</Typography>
            <span>{item.price}</span>
          </li>)}
          <li className="flex text-red-500 justify-between items-center gap-4">
            
            <Typography className="font-bold">Total</Typography>
            <span className='font-bold'>₨ {myCartItem.reduce((sum,a)=>sum+a.price,0)}</span>
          </li> 
         
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color=""
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          place order
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Order