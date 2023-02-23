import { Route, Routes} from "react-router-dom"
import Adminsidebar from "../Components/admin/Admin.sidebar";
import AddProducts from "../pages/admin/AddProducts";
import Categories from "../pages/admin/Categories";
import Dahsboard from "../pages/admin/Dahsboard"
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Users from "../pages/admin/Users";
import Homepage from "../Pages/Homepage"
const Allroutes = () => {
  return (
    <Adminsidebar>
      <Routes>
        <Route path="/" element={<Dahsboard />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/addproduct" element={<AddProducts />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </Adminsidebar>

  );
}
export default Allroutes