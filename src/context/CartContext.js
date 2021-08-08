import { createContext, useState, useEffect } from "react";
import { getFirestore } from "../firebase/client.jsx";

export const CartContext = createContext();

export function CartProvider({ children }) {


  const [cart, setCart] = useState([]);

  const createOrder = ( name , lastname, mail, adress ) => {
    const order = { buyer: { name, lastname, mail, adress }, item: cart, total: getTotalPrice() }     
    console.log(order)
    const db = getFirestore();
    db.collection("orders").add(order);
  }

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const elementIndex = cart.findIndex(element => element.item.id == item.id);
      let cartCopy = [...cart];
      const cartItem = cart.find(element => element.item.id == item.id);
      cartItem.quantity += quantity;
      cartCopy[elementIndex] = cartItem;
      setCart(cartCopy);
    }
    else {
      setCart([...cart, { item, quantity }]);
    }
  }

  const removeItem = (itemId) => {
    setCart(arrayRemove(cart, itemId));
  }

  const clear = () => {
    setCart([]);
  }

  const getTotalPrice = () => {
    return TotalPrice().toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  const getTotalQty = () => {
    let qty = 0;
    cart.forEach(element => {
      let quantity = element.quantity;
      qty += quantity;
    });
    return qty;
  }

  const TotalPrice = () => {
    let total = 0;
    cart.forEach(element => {
      let pricePerQuantity = element.quantity * element.item.price;
      total += pricePerQuantity;
    });
    return total;
  }

  const isInCart = (itemId) => {
    let item = cart.find(element => element.item.id == itemId);
    return !!item;
  }

  const getItemQty = (itemId) => {
    let item = cart.find(element => element.item.id == itemId);
    return !!item ? item.quantity : 0;
  }

  const arrayRemove = (arr, itemId) => {
    return arr.filter((el) => (el.item.id != itemId) && el);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart, getItemQty, getTotalQty, getTotalPrice, createOrder }}>
      {children}
    </CartContext.Provider>
  )
}