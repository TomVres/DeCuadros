import { Link, useParams } from "react-router-dom";


export const ProductDetail = () => {

const { productId } = useParams();

    return (
    <>
      <h1>Bienvenido a la página de producto, su producto vale {productId}</h1>  
    </>
    )


}