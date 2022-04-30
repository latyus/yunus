import React from "react";
import bg2 from '../DATA/image/b2.jpg'
import { useParams } from "react-router-dom";


const ProductDetail = ({data}) => {

        const {name,price} = useParams()
    // console.log(props)
    // const {name,img,price,description} = data
  return<>
            
   <div className="aspect">
   <div className="boxes">
      <div className="box" >
        <img src={bg2} alt="img" />
    <h3>{name}</h3>
        <p className="price">66</p>
        <p>great</p>
        <button className="btn1">order</button>
        </div>
             

  
  </div>  
    </div>
    </>  
};


export  default ProductDetail