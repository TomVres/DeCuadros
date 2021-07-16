export const CartItem = ({title, price, quantity, img}) => {
    return (
        <div>
        <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span className="item-name">{title}</span>
        <span className="item-price">{price}</span>
        <span className="item-quantity">Cantidad:{quantity}</span>
      </li>
      </div>
    )
}