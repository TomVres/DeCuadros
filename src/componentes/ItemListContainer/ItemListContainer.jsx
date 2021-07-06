import { Item } from '../Item/Item.jsx';
import {useEffect, useState} from "react";
import "./style.css"

export const ItemListContainer = () => {

        const [products, setProducts] = useState ([]);
      
        async function getData () {
          
          const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=cuadros");
          const data = await response.json();
          return data.results;
      }
      
      useEffect (() => {
      
        let values = 1;
      
        const waitForData = async () => {
      
          let productList = await getData();
          let aux = productList.map(element => {
            return {
              id: element.id,
              title: element.title,
              img: element.thumbnail,
              price: element.price,
              
            }
          });
          setProducts(aux);

          
      
        }
      
        waitForData()
      
      },[])
      
      if (products.length > 0) {
       
        console.log(products)

        
      }
      
        return (
      <div className="row pt-5">
      {products.map((element,index) => {
        return (
         // <span key={index}> 
          
          <Item title={element.title} img={element.img} price={element.price} id={element.id} />
         // </span>
        )
      })}
      
      </div>
        );
      }


export default ItemListContainer