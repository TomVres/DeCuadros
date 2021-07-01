import './App.css';
import { HomeContainer } from './componentes/HomeContainer/HomeContainer.jsx';
import { NavBar } from './componentes/NavBar/NavBar.jsx';
import { ContactContainer } from './componentes/ContactContainer/ContactContainer.jsx';
import { Footer } from './componentes/Footer/Footer.jsx';
import { ProductDetail } from './componentes/ProductDetail/ProductDetail.jsx';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';



function App() {

  return (
<div>
<BrowserRouter>
  <NavBar/>
    <Switch>
      <Route exact path="/" component={HomeContainer}/>
      <Route exact path="/contacto" component={ContactContainer}/>
      <Route exact path="/producto/:productId" component={ProductDetail}/>

    </Switch>
    <Footer/>
</BrowserRouter>


</div>
  );
}

export default App;
