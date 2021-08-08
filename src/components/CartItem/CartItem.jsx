import "./style.css"

export const CartItem = ({ item, quantity, remove }) => {
  return (
    <li className="d-flex p-2 cart-item">
      <img src={item.img} alt="item1" style={{ width: '5rem' }} />
      <div className="p-2 pl-3" >
        <h6 className="item-name">{item.name}</h6>
        <span className="item-price">$ {item.price} </span>
        <span className="item-quantity">Cant: {quantity} </span>
      </div>
      <button type="button" className="btn btn-warning ml-auto button-remove my-auto" onClick={remove}><i className="far fa-trash-alt "></i></button>
    </li>
  )
}