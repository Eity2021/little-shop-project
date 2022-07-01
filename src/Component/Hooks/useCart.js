import { useEffect, useState } from "react"
import {  getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
 

    const [cart,setCart] = useState([]);

    useEffect( () => {
        const StoredCart = getStoredCart();
        const saveCart = [];
        for (const id in StoredCart){
         const addedProduct = products.find(product => product.id === id);
         if(addedProduct){
          const quantity = StoredCart[id];
          addedProduct.quantity = quantity;
          saveCart.push(addedProduct);
         }
        }
        setCart(saveCart);

    },[products])

    return [cart,setCart];
}

export default useCart;