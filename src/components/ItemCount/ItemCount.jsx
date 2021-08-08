import "./style.css"

export const ItemCount = ({ quantity, minus, plus }) => {

  return (
    <div className="itemcounter">
      <div className="minus-button" onClick={minus}><i className="fas fa-minus-square fa-lg" /></div>
      <a className="quant">{quantity}</a>
      <div className="plus-button" onClick={plus}><i className="fas fa-plus-square fa-lg" /></div>
    </div>
  )
}

