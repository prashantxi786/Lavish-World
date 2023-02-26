import { Route ,Routes} from "react-router-dom"
import React from 'react'
import New from "../Pages/ProductPages/New"
import Sleep from "../Pages/ProductPages/Sleep"
import Wellness from "../Pages/ProductPages/Wellness"
import Massage from "../Pages/ProductPages/Massage"
import Home from "../Pages/HomePage/Home"

const ProductsRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/sleep" element={<Sleep/>}/>
        <Route path="/massage" element={<Massage/>}/>
        <Route path="/wellness" element={<Wellness/>}/>
        
    </Routes>
  )
}

export default ProductsRoutes