import { data } from "../DATA/data";

const All = () =>{
    return (
        data.map((dat)=>{
            const {name, price, img,description,id} = dat

            return <Items 
            name ={name}
            img={img}
            price={price}
            description={description}
            key= {id}
            
            />
                
            
        })
    )
}


const Items = (props) =>{
    const {name, price, img,description} = props
        return(
            <div className="box">
<img src={img} alt="" />
<h3>{name}</h3>
<p className="price">{price}</p>
<p className="">{description} </p>
<button className="btn1">place order</button>
</div>
        )
}

export default All