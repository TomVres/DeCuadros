import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from '../ProductDetail/ProductDetail.jsx'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const ProductDetailContainer = () => {

        const {productId} = useParams()
        let productsList = useContext(CartContext);
        let list = productsList.productsList

        const [product, setProduct] = useState ([]) 
        

     useEffect(() => {

        var result = list.filter(obj => {
            return obj.slug === productId
          })
          setProduct(result[0])
        },[])

        console.log(product)
        


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