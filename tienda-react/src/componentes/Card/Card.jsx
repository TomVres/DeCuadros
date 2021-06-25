import "./style.css"
import { ItemCount } from '../ItemCount/ItemCount.jsx'

export const Card = ({nombre, precio , stock , descripcion}) => {

   
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src="https://via.placeholder.com/286x286" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">{descripcion}</p>
          <p className="card-text stock-text">Stock disponible: {stock}</p>
          <ItemCount stock="5"/>
        </div>
      </div>
    )

}
