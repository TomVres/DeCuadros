import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { HomeContainer } from './pages/HomeContainer/HomeContainer';
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer';
import { ContactContainer } from './pages/ContactContainer/ContactContainer';
import { CartContainer } from './pages/CartContainer/CartContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout/Checkout';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/producto/:slug" component={ItemDetailContainer} />
          <Route exact path="/categoria/:category" component={ItemListContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/checkout" component={Checkout} />

        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
