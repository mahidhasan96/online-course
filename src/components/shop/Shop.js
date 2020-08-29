import React from 'react';
import FakeData from '../../FakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart';



const Shop = (props) => {
    const first12 =FakeData.slice(0,12);
    const [Products, setProducts] = useState(first12);

    const [cart, setCart] = useState([])

    const handelAddProduct = (product) =>{
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
                <Cart cart={cart}></Cart>
    </div>
   </div>
    );
};

export default Shop;
