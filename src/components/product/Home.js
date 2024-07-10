import React from 'react'
import { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import { Spinner } from '@material-tailwind/react'
import useCartItems from '../utils/useCartItems'

//import { productApi } from '../constatnts'
import Options from './Options'
const Home = () => {
  const {cartItems,fetchItem} = useCartItems();
    const[myData,setMyData] = useState([])
    
    const token = localStorage.getItem("userToken");
    useEffect(()=>{
      fetchProductData("all");
    },[])

    useEffect(()=>{
      fetchItem() 
       },[]);
async function fetchProductData(filter){
    console.log(filter)
    const resp = await fetch(`http://localhost:8000/api/v1/products/${filter}`,{
        method:"post",
        headers:{
          "content-type":"application/json",
          "authorization":"Bearer "+token
        }
    })
    const data= await resp.json();
    console.log(data)
    setMyData(data)
} 
console.log(myData) 

const handleAddItems = async(productId)=>{
  console.log(productId)
    const resp = await fetch("http://localhost:8000/api/v1/cart/product",{
      method:"post",
      body:JSON.stringify({productId}),
      headers:{
        "content-type":"application/json",
        "authorization":"Bearer "+token
      }
    })
    const data = await resp.json();
    console.log(data)
    fetchItem()
}
  return (
    (myData.length===0)?<Spinner/>:<div>
    <Options onValueChange={fetchProductData}/>
    <div className='flex flex-wrap m-auto'>
    {myData.map((data)=><ProductCard productId={data._id}  title={data.title} price={data.price} description={data.description} imageUrl={data.imageUrl} handleAddItems={handleAddItems}/>)}
    </div>
    </div>
    
  )
}
export default Home