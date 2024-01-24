import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screen/Home';
import Login from './Screen/login';
import Layout from './Screen/Layout';
import About from './Screen/About';
import User from './Screen/User';
import { LoginContext } from './Context/LoginContext';
import Charger_detail from './Screen/charger_detail';
function App() {

  return (
    
   
    
    <BrowserRouter>
       <Layout/>
      <Routes >
  
       
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/addUser" element={<User />} />
          <Route path="/charger_detail" element={<Charger_detail/>}/>
          
          </Routes>
          </BrowserRouter>
         
     
    
     
  )
}

export default App