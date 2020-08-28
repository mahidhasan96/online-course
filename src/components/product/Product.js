import React from 'react';
import './Product.css';

const Product = (props) => {
    const{img,name,price} = props.Product;

    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
              <h4>{name}</h4>
             <h3>price : {price}</h3>
             <button className="button">add to Cart</button>

            </div>
        </div>
    );
};

export default Product;