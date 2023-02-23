
import Navbar from "./Components/HomepageComponents/Navbar"
import "./App.css";
import Allroutes from "./Routes/Allroutes";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Signin from './Components/Auth Components/Signin'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>

      
    </div>
  );

}

export default App;
