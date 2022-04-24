import React from "react";
import './home.css'
import All from "../DATA/items";

const Home = ()=>{
    return(
        <section id="parent">
               <section className="child">
                    <div className="innersection">  
                    <div className="container">
        <p className="head"> good food, great vibes</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
        qui consectetur adipisicing elit. Nostrum, quiconsectetur adipisicing elit. Nostrum, quiconsectetur adipisicing elit. Nostrum,consectetur adipisicing elit. Nostrum, qui qui </p>
        <button className="btn">book a table</button>
        </div> 
        </div>
               </section>
        <section id="section4">
            <p className="header">
                we feed hungry belly...
            </p>
            <div className="upperlayer">
            <div className="image">
            <img src="./image/hungry.jpg" alt="" />

            </div>
        <div className="aspect">
            
        <div className="boxes">
            <All />
            </div>   
          </div>
            </div>
       <div className="clr"></div>
       </section>
       {/* <section id="section5">
           <p className="head"> our restaurant</p>
          

       </section> */}
        </section>
    )
}


export default Home



// <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>price:65$</p>
// <p>our delicious food are mind-blowing </p>
// </div>

// <div className="box">
// <img src="./image/hungry.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div> 
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>        
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>  
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>  
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>  
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>  
//     <div className="box">
// <img src="./image/barbecued-pork.jpg" alt="" />
// <p>our delicious food</p>
// <p>our delicious food are mind-blowing </p>
//     </div>  











