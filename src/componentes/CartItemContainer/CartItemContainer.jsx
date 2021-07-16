import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import {CartItem} from '../CartItem/CartItem.jsx'


export const CartItemContainer = () => {

const filteredCart = useContext(CartContext)

var isArray = Array.isArray(filteredCart)
console.log(isArray)

    return (
        <div>
        <CartItem price="1" quantity="1" title="asd" />
        </div>
    )
}