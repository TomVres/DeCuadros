import { NavBar } from '../NavBar/NavBar.jsx';
import logo from '../../logo.svg';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer.jsx'
import { Item } from '../Item/Item.jsx'




export const HomeContainer = () => {
    return (  
        
    <div className="App container-fluid">
    <NavBar/>
    <ItemListContainer/>
  </div>
 
)
}