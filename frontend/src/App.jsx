
import Navbar from "./Components/HomepageComponents/Navbar"
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'
import Dahsboard from "./Pages/admin/Dahsboard";
import Adminsidebar from "./Components/admin/Admin.sidebar";


function App() {
  return (

    <div className="App">
      {/* <Navbar/> */}
      <Allroutes/>
     

    </div>
  );

}

export default App;
