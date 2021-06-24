import { NavBar } from '../NavBar/NavBar.jsx';
import logo from '../../logo.svg';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer.jsx'
import { ItemCount } from '../ItemCount/ItemCount.jsx'



export const HomeContainer = () => {
    return (  
        
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Hola!"/>
    <ItemCount stock="10"/>
  </div>
 
)
}