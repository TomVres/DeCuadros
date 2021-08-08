import "./style.css"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";


export const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const [cartQty, setCartQty] = useState(null)

  useEffect(() => {
    setCartQty(cartContext.getTotalQty())
  }, [cartContext.cart])

  return (
    <Link to="/cart">
      <i className="fas fa-shopping-cart icono-carrito" />
      {
        !!cartQty && <span className="badge badge-secondary">{cartQty}</span>
      }
    </Link>
  )
}