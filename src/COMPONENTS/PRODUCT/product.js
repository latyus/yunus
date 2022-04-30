import React from "react";
import './product.css'
import All from "../DATA/items";
import { Link } from "react-router-dom";
const Product = ({data}) => {

//   const data = [
//     {
//         id:1,
//         img:'./image/hungry.jpg',
//         description:'Lorem ipsum dolor sit amet.',
//         name:' pizza',
//         price:'6.5$',

//     },
//     {   id:2,
//         img:'./image/bg2.jpg',
//         description:'Lorem ipsum dolor sit amet.',
//         name:' rice',
//         price:'6.5$'

//     },

//     {
//         id:3,
//         img:'./image/bg1.jpg',
//         description:'Lorem ipsum dolor sit amet.',
//         name:' pizza',
//         price:'6.5$'

//     },
//     {   id:4,
//         img:'./image/hungry.jpg',
//         description:'Lorem ipsum dolor sit amet.',

//         name:' pizza',
//         price:'6.5$'

//     },
//     {
//         id:5,
//         img:'./image/hungry.jpg',
//         description:'Lorem ipsum dolor sit amet.',
//         name:' pizza',
//         price:'6.5$'

//     },
//     {
//         id:6,
//         img:'./image/hungry.jpg',

//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',

//         price:'6.5$'

//     },
//     {
//         id:7,
//         img:'./image/hungry.jpg',
//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',

//         price:'6.5$'

//     },
//     {   
//         id:8,
//         img:'./image/hungry.jpg',
//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',

//         price:'6.5$'

//     },
//     {   
//         id:9,
//         img:'./image/hungry.jpg',
//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',
//         price:'6.5$'

//     },
//     {
//         id:10,
//         img:'./image/hungry.jpg',
//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',
//         price:'6.5$'

//     },
//     {   
//         id:11,
//         img:'./image/hungry.jpg',
//         name:' pizza',
//         description:'Lorem ipsum dolor sit amet.',
//         price:'6.5$'

//     },
// ]
  return(
    <section id="section4">
    <p className="header">
        we feed hungry belly...
    </p>
    <div className="upperlayer">
    <div className="image">
    <img src="./image/hungry.jpg" alt="" />
    </div>
    </div>
<div className="aspect">
    {data.map((dat)=>{
    const {name, price, img,description} = dat

    return <>
    
    <div className="boxes">
      
    <div className="box">
    <Link to={`${name}`}>
   
    

    <img src={img} alt="" />
    <h3>{name}</h3>
    <p className="price">57</p>
    <p className="">{description} </p>
    <button className="btn1">place order</button>
    </Link>
    </div>
   
        </div>   
        </>
    })}

    </div>
<div className="clr"></div>
</section>
  );
};

export default Product;
