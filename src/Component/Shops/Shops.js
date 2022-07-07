import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import useProducts from "../Hooks/useProducts";
import Product from "../Product/Product";
import "./Shops.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import OrderInfo from "../OrderInfo/OrderInfo";

const Shops = () => {
  let navigate = useNavigate();

  const [products, setProducts] = useProducts([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //console.log(products)
    const storedCart = getStoredCart();
    // console.log(storedCart);
    const saveCart = [];
    for (const id in storedCart) {
      //console.log(id)
      const addedProduct = products.find((product) => product.id === id);
      //console.log(addProduct)
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
        //console.log(addedProduct)
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    //console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id === selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    //const newCart = [...cart, selectedProduct ];
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop_container">
      <div>
        <h3>This is For Products : {products.length}</h3>

        <div className="shop_grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="order_info">
        <OrderInfo cart={cart}>

          <button onClick={() => alert('click')} className="review">
            Reviews Order{" "}
            <span className="icon">
              <FontAwesomeIcon icon={faFolder} />
            </span>
          </button>
        </OrderInfo>
      </div>
    </div>
  );
};

export default Shops;
