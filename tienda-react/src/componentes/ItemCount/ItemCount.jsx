import { useState } from "react"
import "./style.css"

export const ItemCount = ({stock , initial}) => {
    const [quantity , setQuantity] = useState([1]);

    const sumar = () => {
      if (quantity<stock) {
        setQuantity(Number(quantity)+1)
      }
    }

    const restar = () => {
      if (quantity!=1) {
        setQuantity(Number(quantity)-1)

      }
    }

    /* const manualChange = (e) => {
    let value = e.target.value
    if (value > stock) {
    setQuantity(stock)
      } else {
        setQuantity(value)
      } 
    } */

    const onAdd = () => {
      console.log("Agregaste "+ quantity + " items al carrito.")
  }

    return (
        <div className="itemcounter">
        <div className="minus-button" onClick={restar}><i className="fas fa-minus-square fa-lg" /></div>
        <a class="quant">{quantity}</a>
        <div className="plus-button" onClick={sumar}><i className="fas fa-plus-square fa-lg" /></div>
        <div>
        <a href="#" className="btn btn-primary add-to-cart-btn" onClick={onAdd}><i className="fas fa-shopping-cart icono-carrito icono-carrito-btn" />Sumar al carrito</a>
        </div>

      </div>
    )
}

