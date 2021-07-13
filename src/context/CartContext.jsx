import { createContext } from "react";
import { useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartComponentContext = ({children}) => {
    

    const [cart, setCart] = useState([])

    const [quantity, setQuantity] = useState(0)

    const onAdd = (item) => {
        setCart([...cart, item, quantity]) 
    }

    useEffect(()=>{

        setQuantity(cart.length)
        console.log(cart)

    },[cart])

    return <CartContext.Provider value={{cart, setCart, onAdd, quantity, setQuantity}}>

{children}

    </CartContext.Provider>
}
