import { NavBar } from '../NavBar/NavBar.jsx';
import logo from '../../logo.svg';
import "./style.css"

import { ItemListContainer } from '../ItemListContainer/ItemListContainer.jsx'
import { Item } from '../Item/Item.jsx'




export const HomeContainer = () => {
    return (  
        <div>
    <div className="App container-fluid main-slider">
<h1 class="slider-title">Cuadros<br></br>con <span className="orange">onda</span>.</h1> 
</div>
  <div className="container-fluid">
  <ItemListContainer/>
</div>
</div>

 
)
}