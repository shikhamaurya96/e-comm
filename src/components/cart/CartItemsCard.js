import React from 'react'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const CartItemsCard = ({imageUrl,title,description,quantity,price,handleRemoveCartItem,productId}) => {
  return (
    <div> 
      
    <Card className="w-full max-w-[48rem] flex-row m-auto ml-8 p-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className='ml-8'>
        <Typography variant="h6" color="black" className="mb-4 uppercase text-lg">
          {title}
        </Typography>
        <Typography   className="mb-2">
          {description}
        </Typography>
        <Typography color="black" className="mb-4 font-normal">
          Qty: {quantity}
        </Typography>
        <Typography color="black" className="mb-4 font-normal">
          Price: {price} Rs.
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          14 days return available
        </Typography>
        <Button onClick={()=>handleRemoveCartItem(productId)}>Remove item</Button>
      </CardBody>
    </Card>
    </div>
  )
}

export default CartItemsCard