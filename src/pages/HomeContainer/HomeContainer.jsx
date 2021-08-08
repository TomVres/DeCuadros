import "./style.css";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const HomeContainer = () => {

  return (
    <div>
      <div className="App container-fluid main-slider">
        <h1 className="slider-title">Cuadros<br/><br/>con <span className="orange">onda</span>.</h1>
      </div>
      <div className="container-fluid">
        <ItemListContainer />
      </div>
    </div>
  )
}