import Signup from "./components/user/Signup";
import {Routes,Route } from "react-router-dom";
import Privacy from "./components/user/Privacy";
import Login from "./components/user/Login";
import Account from "./components/user/Account";
import Error from "./components/user/Error";
import Home from "./components/product/Home";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import Cart from "./components/cart/Cart"
import Delivery from "./components/order/Delivery";

function App() {
 
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/privacy-policy" element={<Privacy/>}/>
      <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<ProtectedRoute/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Account/>}/>
      <Route path="/cart-items" element={<Cart/>}/>
      <Route path="/myOrder" element={<Delivery/>}/>
      
    </Route>
   
      <Route path="/error" element={<Error/>}/>
    </Routes>
  );
}

export default App;
