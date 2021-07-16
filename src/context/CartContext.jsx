import { createContext } from "react";
import { useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartComponentContext = ({children}) => {
    

    const [cart, setCart] = useState([])

    const [quantity, setQuantity] = useState(0)

    const [filteredCart, setFilteredCart] = useState([])



    const onAdd = (data, quantity) => {
        setCart([...cart, {item: data.id, quantity: quantity, price: data.price, img: data.thumbnail, title: data.title}]) 
        console.log(quantity)
        console.log(data)
        console.log(cart)
}

  

    useEffect(()=>{
        
        console.log(cart)

        var holder = {};

        cart.forEach(function(d) {
          if (holder.hasOwnProperty(d.item)) {
            holder[d.item] = holder[d.item] + d.quantity;

          } else {
            holder[d.item] = d.quantity;
          }
        });
        
        var filtered = [];
        
        for (var prop in holder) {
          filtered.push({ item: prop, quantity: holder[prop] });
        }
        
        console.log(filtered);
    
      setQuantity(filtered.length)
      setFilteredCart(filtered)

      



       

    },[cart])

    return <CartContext.Provider value={{cart, setCart, onAdd, quantity, setQuantity, filteredCart}}>

{children}

    </CartContext.Provider>
}