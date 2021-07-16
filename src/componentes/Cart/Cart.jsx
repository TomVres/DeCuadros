import {CartItemContainer} from '../CartItemContainer/CartItemContainer.jsx'


export const Cart = () => {
    return (
        <div className="container">
        <div className="shopping-cart">
          <div className="shopping-cart-header">
            <i className="fa fa-shopping-cart cart-icon" /><span className="badge">3</span>
            <div className="shopping-cart-total">
              <span className="lighter-text">Total:</span>
              <span className="main-color-text">$2,229.97</span>
            </div>
          </div>
          <ul className="shopping-cart-items">
        
          <CartItemContainer/>

          </ul>
          <a href="#" className="button">Checkout</a>
        </div> 
      </div> 
    )
}