import { Item } from '../Item/Item.jsx';
import {useEffect, useState} from "react";
import "./style.css"
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.jsx';

export const ItemListContainer = () => {

        const productsList = useContext(CartContext)
        const products = productsList.productsList
      
        return (
      <div className="container">
      <div className="row pt-5">
      {products.map((element,index) => {
        return (
         // <span key={index}> 
          
          <Item title={element.name} img={element.img} price={element.price} id={element.id} stock={element.stock} category={element.category} slug={element.slug}/>
         // </span>
        )
      })}
      
      </div>
      </div>
        );
      }


export default ItemListContainer