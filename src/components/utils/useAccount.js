import { useState } from "react"

const useAccount = ()=>{
    
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[mobile,setMobile] = useState("")
    const[address,setAddress] = useState("")
    const[isLoading,setIsLoading] = useState(true)

    const token = localStorage.getItem("userToken");
    console.log(token)
  async function fetchAccountData(){
        try {
            const response = await fetch("http://localhost:8000/api/v1/user/account", {
            method:"get",
            headers:{
              "content-type":"application/json",
              "authorization":"Bearer "+token
            }
          })
          const userData = await response.json();
          console.log("userData",userData)
          setName(userData.username)
          setEmail(userData.email)
        setMobile(userData.mobile)
       setAddress(userData.address)
          } catch (error) {
            console.log("error",error)
          }
          setIsLoading(false)
    }
    return {name,email,mobile,address,isLoading,fetchAccountData}
}
export default useAccount