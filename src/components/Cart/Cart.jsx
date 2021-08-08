import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem.jsx'
import "./style.css"
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const [cartQty, setCartQty] = useState(0);
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [mail, setMail] = useState();
  const [adress, setAdress] = useState();





  const handleRemove = (itemId) => { cartContext.removeItem(itemId) };

  useEffect(() => {
    setCartQty(cartContext.getTotalQty())
  }, [cartContext.cart])

  return (
    <div className="container p-5 pb-2">
      {
        !!cartQty
          ? 
          <div>
          <div className="row">
          <div className="col-md-8">
          <Form className="cart-container">
          <div className="row">
          <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" onInput={(e) => {setName(e.target.value)}}/>
           
          </Form.Group>
        
          <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" onInput={(e) => {setLastname(e.target.value)}}/>
          </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@dominio.com" onInput={(e) => {setMail(e.target.value)}} />
            <Form.Text className="text-muted">
             No compartimos tu información con nadie.
            </Form.Text>
          </Form.Group>


          <div className="row">
          
          <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Calle del Oceano 142" onInput={(e) => {setAdress(e.target.value)}} />
        
          </Form.Group>
        
          <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
            <Form.Label>Código Postal</Form.Label>
            <Form.Control type="text"  placeholder="1672"/>
          </Form.Group>
          </div>
        
          
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Quiero recibir novedades en mi correo" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
          <div className="cart-container col-md-4">
            <ul className="shopping-cart-items">
              {
                cartContext.cart.map(
                  ({ item, quantity }) => <CartItem item={item} quantity={quantity} remove={() => handleRemove(item.id)} key={item.id} />
                )
              }
            </ul>
            <p className="cart-total" >
              TOTAL: {cartContext.getTotalPrice()}
            </p>
          </div>

        </div>

     
        <div className="row">
        <div className="container">
        <Link className="button checkout-btn" to="/checkout" onClick={() => { cartContext.createOrder(name, lastname, mail, adress)}}>Checkout</Link>
</div>  
        </div>
        </div>
          : <div className="p-5">
            <h2>Carrito vacio</h2>
            <Link className="button text-light" to="/">Ir a comprar</Link>
          </div>
          
      }
    </div>

  )
}