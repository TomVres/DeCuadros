import "./style.css"
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {

  return (
    <div className="col-md-4 mb-4 mt-2">
       <Link to={"/producto/"+item.slug}><div className="card">
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title pt-3">{item.name}</h5>
          <div className="text-small">
          <p className="card-text stock-text">Categoría: <span className="capitalize"> <Link to={"/categoria/"+item.category}>{item.category}</Link></span></p>

          <p className="card-text stock-text">Stock disponible: {item.stock}</p>
          </div>
          <p className="card-text price-text">${item.price}</p>
          <Link to={"/producto/"+item.slug}><span className="details-btn"><i class="fas fa-angle-double-right"></i> Ver Detalle</span></Link>
        </div>
      </div></Link>
    </div>
  )

}
