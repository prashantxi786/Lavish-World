
// import Navbar from "./Components/HomepageComponents/Navbar"
import Navbar from "./Components/Navbar/Navbar";
import SmallNavbar from "./Components/Navbar/SmallNavbar"
import Footer from "./Components/Footer/Footer"

import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'
import ProductsRoutes from "./Routes/ProductsRoutes";
import New  from "./Pages/ProductPages/New"
import Dahsboard from "./Pages/admin/Dahsboard";





import CartDrawer from "./Pages/Cart/cartdrawer";
import SignUp from "./Components/Auth Components/SignUp";
import Checkout from "./Pages/Checkout/checkout";
import Home from "./Pages/HomePage/Home";


function App() {
  const adminPath = window.location.pathname === "/admin" ? false : true;
      

  return (
    <div className="App">

    {adminPath ?<><div className="big">
        <Navbar />
      </div> 
      <div className="small">
        <SmallNavbar />

      </div></> : <Allroutes/>}
      


    
  
    <ProductsRoutes/>
    
    <Footer/>


      {/* <Allroutes/> */}

      

    </div>
  );

}

export default App;
