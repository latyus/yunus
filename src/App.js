import React from "react";
import Navbar from "./COMPONENTS/NAVBAR/navbar";
import './App.css'
import Personal from "./COMPONENTS/PERSONAL INFO/personal";
import Edu from "./COMPONENTS/EDUCATIONAL EXP/edu";


const App = ()=>{
  return(

    <section>
      <Navbar/>
    <Personal />
    <Edu />
    </section>
 
  )
  
}

export default App