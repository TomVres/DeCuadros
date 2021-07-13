import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = () => {
    const{quantity} = useContext(CartContext)
    return (

       <div> <i className="fas fa-shopping-cart icono-carrito" /><p>{quantity}</p></div>


    )
}