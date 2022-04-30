import React from "react";
import Navbar from "./COMPONENTS/NAVBAR/navbar";
import './App.css'
import Home from "./COMPONENTS/HOME/home";
import About from  "./COMPONENTS/ABOUT/about";
import Contact from "./COMPONENTS/CONTACT/contact";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Product from "./COMPONENTS/PRODUCT/product";
import ProductDetails  from "./COMPONENTS/PRODUCT/ProductDetails";
import { data } from "./COMPONENTS/DATA/data";


const App = ()=>{
  return(
 
    
   

   <BrowserRouter>
      <Navbar/>

    <Routes>
    {/* <Route path='/navbar' element = {<Navbar/>} /> */}
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path="/product/:name" element = {<ProductDetails data ={data} />} />
      <Route path='/product' element = {<Product data ={data} />} />


    </Routes>
   
   </BrowserRouter>
  
   
 
  )
  
}

export default App
