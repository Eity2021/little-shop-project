import React from "react";
import { removeFromDb } from "../../utilities/fakedb";
import useProducts from "../Hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";
import useCart from "./../Hooks/useCart";
import "./Order.css";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import OrderInfo from "../OrderInfo/OrderInfo";

const Order = () => {

  const navigate = useNavigate();
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);


  const handleRemoveItems = (product) => {
    console.log(product);
    const cartRemove = cart.filter((items) => items.id !== product.id);
    setCart(cartRemove);
    removeFromDb(product.id);
  };
  return (
    <div className="order_page">
      <div className="review_order_page">
        {cart.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            handleRemoveItems={handleRemoveItems}
          ></ReviewItem>
        ))}
      </div>

      <div className="order_info">
        <OrderInfo cart={cart}>

          
            <button  onClick={() => navigate('/shipment')}    className="review">
              Proceed Checkout
              <span className="icon">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </span>
            </button>
         
        </OrderInfo>
      </div>
    </div>
  );
};

export default Order;
