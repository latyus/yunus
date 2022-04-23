import React from "react";
import Navbar from "./COMPONENTS/NAVBAR/navbar";
import './App.css'
import Home from "./COMPONENTS/HOME/home";
import About from  "./COMPONENTS/ABOUT/about";
import Contact from "./COMPONENTS/CONTACT/contact";
import {BrowserRouter,Routes, Route,} from "react-router-dom";
import Product from "./COMPONENTS/PRODUCT/product";


const App = ()=>{
  return(
    <BrowserRouter>
      <Navbar/>
       <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
      </Routes>
       </BrowserRouter>

    
    
  
 
  )
  
}

export default App
