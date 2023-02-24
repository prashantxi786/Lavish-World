import { Route, Routes} from "react-router-dom"
import Adminsidebar from "../Components/admin/Admin.sidebar";
import AddProducts from "../pages/admin/AddProducts";
import Categories from "../pages/admin/Categories";
import Dahsboard from "../pages/admin/Dahsboard"
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Users from "../pages/admin/Users";

const Allroutes = () => {
  return (
    <Adminsidebar>
      <Routes>
        <Route path="/admin" element={<Dahsboard />}></Route>
        <Route path="/admin/product" element={<Products />}></Route>
        <Route path="/admin/addproduct" element={<AddProducts />}></Route>
        <Route path="/admin/order" element={<Orders />}></Route>
        <Route path="/admin/user" element={<Users />}></Route>
        <Route path="/admin/categories" element={<Categories />}></Route>
      </Routes>
    </Adminsidebar>
    
  );
}
export default Allroutes