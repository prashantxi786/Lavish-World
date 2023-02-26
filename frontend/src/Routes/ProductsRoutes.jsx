import { Route ,Routes} from "react-router-dom"
import React from 'react'
import New from "../Pages/ProductPages/New"
import Sleep from "../Pages/ProductPages/Sleep"
import Wellness from "../Pages/ProductPages/Wellness"
import Massage from "../Pages/ProductPages/Massage"
import Home from "../Pages/HomePage/Home"
import SignUp from "../Components/Auth Components/SignUp"
import Checkout from "../Pages/Checkout/checkout"

const ProductsRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/sleep" element={<Sleep/>}/>
        <Route path="/massage" element={<Massage/>}/>
        <Route path="/wellness" element={<Wellness/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
    </Routes>
  )
}

export default ProductsRoutes