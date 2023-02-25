
import Navbar from "./Components/HomepageComponents/Navbar"
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'
import Dahsboard from "./Pages/admin/Dahsboard";
import CartDrawer from "./Pages/Cart/cartdrawer";
import SignUp from "./Components/Auth Components/SignUp";
import {CartPage} from "./Pages/Cart/cart";
import Checkout from "./Pages/Checkout/checkout";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <SignUp/>
      {/* <Allroutes/> */}
      {/* <Checkout/> */}
      {/* <CartPage/> */}
    </div>
  );

}

export default App;
