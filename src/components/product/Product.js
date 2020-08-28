import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.Product)
    const{img,name,price} = props.Product;

    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
             <h3>price : {price}</h3>
            </div>
            <div>

            </div>
         <h5>{name}</h5>
        </div>
    );
};

export default Product;