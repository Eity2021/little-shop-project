import React from 'react';
import './OrderInfo.css'
const OrderInfo = ({cart,children}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
      quantity = quantity + product.quantity;
      total = total + product.price * product.quantity;
      shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
       <div className="order_area">
      <div className='orders'>
      <h4>Order Summary</h4>
      <p>Selected Items : {quantity}</p>
      <p>Total price : ${total}</p>
      <p>Total Shipping Charge : {shipping} </p>
      <p>tax : {tax}</p>
      <h3>Grand Total : {grandTotal.toFixed(2)}</h3>

      <button onClick={() => alert("cart click")} className="order">
        Clear cart
      </button>
      <br />
     {children} 
      </div>
    </div>
    );
};

export default OrderInfo;