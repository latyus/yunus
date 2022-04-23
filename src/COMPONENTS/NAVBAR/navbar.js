import React from "react";
import { Link } from "react-router-dom";
import product from "../PRODUCT/product";
import './navbar.css'
const Navbar =()=>{
    return(
        <header>
            <div className="container">
            <nav>
               <p className="logo">eat <span>MORE</span> </p>
               <div className="navbar">
                  <ul>
                      <li> <Link to='Home'>Home</Link></li> 
                      <li> <Link to='About'>About us</Link></li> 
                      <li> <Link to='Contact'>  Contact  </Link>  </li> 
                      <li><Link to='Product'>Product</Link></li> 
                     
                   </ul>
               </div>
            </nav>
            
            <section id="section2">

            
    <div className="innersection">
        
        <p className="head"> good food, great vibes</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
        qui consectetur adipisicing elit. Nostrum, quiconsectetur adipisicing elit. Nostrum, quiconsectetur adipisicing elit. Nostrum,consectetur adipisicing elit. Nostrum, qui qui </p>
        <button className="btn">book a table</button>

    </div>
    </section>
    </div>
        </header>
    )
}

export default Navbar