
import Navbar from "./Components/HomepageComponents/Navbar"
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'
import ProductsRoutes from "./Routes/ProductsRoutes";
import New  from "./Pages/ProductPages/New"
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Allroutes/> */}
      
       <ProductsRoutes/>
  

    </div>
  );

}

export default App;
