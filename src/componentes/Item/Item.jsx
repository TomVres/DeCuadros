import "./style.css"
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'

export const Item = ({title, price , img , stock, id}) => {


    return (
        <div className="col-md-2">
        <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text stock-text">Stock disponible: {stock}</p>
          <p className="card-text price-text">${price}</p>
          <button><Link to={"/producto/"+id}>Ver Detalle</Link></button>
        </div>
        </div>
      </div>
    )

}
