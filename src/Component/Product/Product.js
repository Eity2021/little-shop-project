import React from "react";
import "./Product.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product,handleAddToCart }) => {
  const {name, img, seller, price, ratings } = product;
 
  return (
    <div className="product_area">
      <div className="product">
        <div className="images">
          <img src={img} alt="" />
        </div>
        <div className="product_info">
          <h4>{name}</h4>
          <h5>Price : ${price}</h5>
          <p>Manufacturer : {seller}</p>
          <p>Ratings : {ratings}</p>
        </div>
        <div className="button">
          <button onClick={() => handleAddToCart(product)}>Add to cart <span className="icon"><FontAwesomeIcon icon={faShoppingCart} /></span></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
