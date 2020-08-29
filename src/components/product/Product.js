import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
   // console.log(props)
    const{img,name,price} = props.Product;

    return (
        <div className="product">
            <div>
            <img src={img} alt=""/>
            </div>
            <div>
              <h4>{name}</h4>
             <h3>price : {price}</h3>
             <button 
            className="button" 
            onClick={() => props.handelAddProduct(props.Product)}
             > 
              <FontAwesomeIcon icon={ faShoppingCart} /> add to Cart</button>

            </div>
        </div>
    );
};

export default Product;