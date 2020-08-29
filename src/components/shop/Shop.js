import React from 'react';
import FakeData from '../../FakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../product/Product';


const Shop = (props) => {
    const first12 =FakeData.slice(0,12);
    const [Products, setProducts] = useState(first12);

    const [cart, setCart] = useState([])

    const handelAddProduct = (product) =>{
        console.log('product Added',product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="course-container">
            <div className="course-items">
            
                    {
                    Products.map(pd => <Product
                        handelAddProduct = {handelAddProduct}
                         Product={pd}>
                         </Product>)
                    }
           
        </div>
    
    <div className="cart-container">
        <h3>this is cart</h3>
                <h5>Order Review : {cart.length}</h5>
    </div>
   </div>
    );
};

export default Shop;
