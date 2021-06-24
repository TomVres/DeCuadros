import { useState } from "react"
import "./style.css"

export const ItemCount = ({stock , initial}) => {
    const [quantity , setQuantity] = useState([1]);
    console.log(quantity);
    if (Number(quantity) >= Number(stock)) {
        return (
            <div className="itemcounter">
            <div className="minus-button" onClick={() => setQuantity(Number(quantity) - 1)}><i className="fas fa-minus-square fa-lg" /></div>
            <a className="quant">{quantity}</a>
            <div className="plus-button disabled"><i className="fas fa-plus-square fa-lg" /></div>
            <p className="no-stock-text">Solo nos quedan {stock} unidades ¡Lo sentimos!</p>
          </div>
        )
    }

    

    return (
        <div className="itemcounter">
        <div className="minus-button" onClick={() => setQuantity(Number(quantity) - 1)}><i className="fas fa-minus-square fa-lg" /></div>
        <a className="quant">{quantity}</a>
        <div className="plus-button" onClick={() => setQuantity(Number(quantity) + 1)}><i className="fas fa-plus-square fa-lg" /></div>
      </div>
    )
}

/*onClick={() => {setQuantity([...quantity, {id:1}])}}*/