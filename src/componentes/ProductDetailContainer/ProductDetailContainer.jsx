import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from '../ProductDetail/ProductDetail.jsx'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const ProductDetailContainer = () => {

        const {productId} = useParams()
        const [product, setProduct] = useState ([]) 
        

     useEffect(() => {
            fetch("https://api.mercadolibre.com/items/"+productId)
            .then(res => res.json())
            .then (res=>{
                setProduct(res)
                
            })
        },[productId])


        return (
            
           <> {
            product.status === 404 ?
            <p>Elemento no encontrado.</p>
            :
            <ProductDetail data={product} />

            }

            </>
        )
      
        }