import './App.css';
import { HomeContainer} from './componentes/HomeContainer/HomeContainer.jsx'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
<div>
<HomeContainer/>
<ItemListContainer greeting="Hola!"/>
</div>
  );
}

export default App;
