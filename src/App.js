import './App.css';
import { HomeContainer} from './componentes/HomeContainer/HomeContainer.jsx';
import {useEffect, useState} from "react";


function App() {

  const [products, setProducts] = useState ([]);

  async function getData () {
    
    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=cuadros");
    const data = await response.json();
    return data.results;
}

useEffect ( () => {

  const waitForData = async () => {
    let aux = products.map(element => console.log(element))
    console.log(aux);

  }
  setProducts(waitForData());
},[])



  return (
<div>
<HomeContainer/>

</div>
  );
}

export default App;
