import { Link, useParams } from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { useState } from 'react';
import './style.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function ItemDetail({ item }) {
  const initial = 1;
  const cartContext = useContext(CartContext);

  const [quantity, setQuantity] = useState(initial);

  const plus = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1)
    }
  }

  const minus = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <section className="py-5 product-container">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={item.img} alt={item.name} />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{item.name}</h1>
            <div className="fs-5 mb-3">
              <span className="price-text">${item.price}</span>
            </div>
            <p className="lead display-linebreak">{item.description}</p>
            <div className="small mt-4">Categoría: <span className="capitalize">{item.category}</span></div>

            <div className="small mb-1">Stock disponible: {item.stock}</div>
            <div className="d-flex">
              <ItemCount plus={plus} minus={minus} quantity={quantity} />
              <button className="btn btn-primary add-to-cart-btn" onClick={() => { cartContext.addItem(item, quantity) }}>
                <i className="fas fa-shopping-cart icono-carrito icono-carrito-btn" />
                Sumar al carrito
              </button>
              <Link to="/cart" className="btn btn-go-to-cart">Ver Carrito</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}