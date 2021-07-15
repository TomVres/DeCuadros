import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/CartContext"
import "./style.css"

export const ItemCount = ({quantity, minus, plus, data }) => {

  const {onAdd} = useContext(CartContext)

 
    return (
        <div className="itemcounter">
        <div className="minus-button" onClick={minus}><i className="fas fa-minus-square fa-lg" /></div>
        <a className="quant">{quantity}</a>
        <div className="plus-button" onClick={plus}><i className="fas fa-plus-square fa-lg" /></div>
        <div className="line-break"></div>
        <a href="#" className="btn btn-primary add-to-cart-btn" onClick={()=>{onAdd(data, quantity)}}><i className="fas fa-shopping-cart icono-carrito icono-carrito-btn" />Sumar al carrito</a>

      </div>
    )
}

