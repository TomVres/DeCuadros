import "./style.css"
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'

export const Item = ({title, price , img , stock}) => {

 const  productId = price 

    return (
        <div className="col-md-2">
        <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text stock-text">Stock disponible: {stock}</p>
          <p className="card-text price-text">${price}</p>

          <ItemCount stock="5"/>
          <button><Link to={"/producto/"+productId}>Ver Detalle</Link></button>
        </div>
        </div>
      </div>
    )

}
