import React from 'react';
import FakeData from '../../FakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../product/Product';


const Shop = () => {
    const first12 =FakeData.slice(0,12)
    const [Products, setProducts] = useState(first12)

    return (
        <div className="course-container">
            <div className="course-items">
            
                    {
                    Products.map(pd => <Product Product={pd}></Product>)
                    }
           
        </div>
    
    <div className="cart-container">
        <h3>this is cart</h3>
    </div>
   </div>
    );
};

export default Shop;
