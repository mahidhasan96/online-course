import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;




    const totalPrice = cart.reduce((total, prb) => total + prb.price,0)
    return (
        <div className="cartstyle">
           <h2 className="text-danger">Order Summary</h2>
           <h4>Items Ordered:{cart.length} </h4>
             <h5 className="text-primary">Total Price :{totalPrice}</h5>
        </div>
    );
};

export default Cart;