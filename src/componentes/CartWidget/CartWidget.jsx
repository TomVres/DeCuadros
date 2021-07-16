import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartContainer } from "../CartContainer/CartContainer"


export const CartWidget = () => {
    const{quantity} = useContext(CartContext)
    return (
      <div>
       <div> <i className="fas fa-shopping-cart icono-carrito" /><span class="badge badge-secondary">{quantity}</span></div>

     <CartContainer/>
     </div>



    )
}