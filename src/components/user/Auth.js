const Auth = (email,password)=>{
   
        const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
       
        if(!checkEmail) return " please enter correct email"
         if(!checkPassword) return "enter a password contains at least a number, any special chracter,small alphabet and capital alphabet"
         return null;
        }
        

export default Auth;