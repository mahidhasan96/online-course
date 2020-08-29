import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;




    const totalPrice = cart.reduce((total, prb) => total + prb.price,0)
    return (
        <div className="cartstyle">
           <h2>Order Summary</h2>
           <h4>Items Ordered:{cart.length} </h4>
             <p>total price :{totalPrice}</p>
        </div>
    );
};

export default Cart;