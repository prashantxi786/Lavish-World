import { Route ,Routes} from "react-router-dom"
import React from 'react'
import New from "../Pages/ProductPages/New"

const ProductsRoutes = () => {
  return (
    <Routes>
        <Route path="/new" element={<New/>}/>
        
    </Routes>
  )
}

export default ProductsRoutes