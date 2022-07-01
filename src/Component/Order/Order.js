import React from "react";
import { removeFromDb } from "../../utilities/fakedb";
import useProducts from "../Hooks/useProducts";
import Order_info from "../Order_info/Order_info";
import ReviewItem from "../ReviewItem/ReviewItem";
import useCart from "./../Hooks/useCart";
import "./Order.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);



  const handleRemoveItems = (product) => {
    console.log(product);
    const cartRemove = cart.filter((items) => items.id !== product.id);
    setCart(cartRemove);
    removeFromDb(product.id);
  };
  return (
    <div className="order_page">
      <div>
        {cart.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            handleRemoveItems={handleRemoveItems}
          ></ReviewItem>
        ))}
      </div>

      <div className="order_info">
        <Order_info cart={cart}>

          <Link to="/inventory ">
            <button className="review">
              Proceed Checkout
              <span className="icon">
                <FontAwesomeIcon icon={faArrowAltCircleRight} />
              </span>
            </button>
          </Link>
        </Order_info>
      </div>
    </div>
  );
};

export default Order;
