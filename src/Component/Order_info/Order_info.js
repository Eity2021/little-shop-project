import React from "react";
import './Order_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Order_info = ({cart,children}) => {

      let total = 0;
      let shipping = 0;
      let quantity = 0 ;
      for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping ;
        
      }
      const tax = parseFloat((total * 0.1).toFixed(2));
      const grandTotal = total + shipping + tax;
  return (
    <div className="order_area">
        <h4>Order Summary</h4>
        <p>Selected Items : {quantity}</p>
        <p>Total price : ${total}</p>
        <p>Total Shipping Charge : {shipping} </p>
        <p>tax : {tax}</p>
        <h3>Grand Total : {grandTotal.toFixed(2)}</h3>

        <button className="order">Clear cart  <span className="icon"><FontAwesomeIcon icon={faTrashAlt} /></span> </button>
        <br/>
       {children}
    </div>
  );
};

export default Order_info;
