import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItemContainer } from "../CartItemContainer/CartItemContainer"


export const CartWidget = () => {
    const{quantity} = useContext(CartContext)
    return (
<div>
       <div> <i className="fas fa-shopping-cart icono-carrito" /><span class="badge badge-secondary">{quantity}</span></div>

       <div className="container">
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="fa fa-shopping-cart cart-icon" /><span className="badge">3</span>
      <div className="shopping-cart-total">
        <span className="lighter-text">Total:</span>
        <span className="main-color-text">$2,229.97</span>
      </div>
    </div>
    <ul className="shopping-cart-items">
  
    <CartItemContainer/>
    
    </ul>
    <a href="#" className="button">Checkout</a>
  </div> 
</div> 
</div>


    )
}