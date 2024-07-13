import React, { useState,useEffect } from 'react'
import { useNavigate,NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Collapse,
    
  } from "@material-tailwind/react";

const NavList = () => {
    const [openNav, setOpenNav] = useState(false);
    
      const navigate = useNavigate();
      
      const cartDataLength = localStorage.getItem("cart-data")
      const cartData = useSelector((state)=>state.myCartItems.length)
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    
  }, []);

  
const handleLogout = ()=>{
  localStorage.removeItem("userToken")
  navigate("/login")
}
 const onChangeMyAccount = (filter)=>{
     if(filter==="profile"){
      navigate("/profile")
      return
     }
     if(filter==="myOrder"){
      navigate("/myOrder")
     }
 }
  
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className='relative  p-2 border-black'> 
      <Link to={"./cart-items"}>
      <Typography className='absolute top-0 bottom-12 left-6 text-red-500 font-bold '>{cartData}</Typography>
      <img src='./images/cart.jpg' className='h-12'/>
      </Link>
      
      
      </div>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-black  text-lg"
      >
        <NavLink to={"/"}  className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <select
        className="p-1 font-normal text-white p-3 text-lg bg-blue-500"
        onChange={(e)=>onChangeMyAccount(e.target.value)}
      >
        <option>Account</option>
        <option key={"profile"} value={"profile"}>Profile</option>
        <option key={"myOrder"} value={"myOrder"}>MyOrder</option>
        
      </select>
      
     
</ul>
);
   

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll mt-0 border-2 bg-gray-400">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <div className='border-2 border-black w-20 h-16'>
          <img src='./images/shopping-image.jpg' className='w-full h-full'/>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block text-black bg-blue-600 text-md m-2"
               onClick={handleLogout}>
                <span>Log Out</span>
              </Button>
             
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text"  className=" p-4">
              <span className='text-black text-lg'>Log Out</span>
            </Button>
            
          </div>
        </Collapse>
      </Navbar>
      </div>
  )
}

export default NavList