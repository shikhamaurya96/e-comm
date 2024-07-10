import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const ProductCard = ({productId,title,price,description,imageUrl,handleAddItems}) => {
  
  
  return (
    <Card className="w-64  m-12">
      <CardHeader shadow={false} floated={false} className="h-52">
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {price} Rs.
          </Typography>
          
        </div>
        <Typography color="blue-gray" className="font-sm text-sm">
            {description}
          </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-600 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
       onClick={()=>handleAddItems(productId)} >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard