import { Link, useParams } from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import './style.css'




export const ProductDetail = ({data}) => {



    return (
    <>
<section className="py-5">
  <div className="container px-4 px-lg-5 my-5">
    <div className="row gx-4 gx-lg-5 align-items-center">
      <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.thumbnail} alt="Imágen de producto" /></div>
      <div className="col-md-6">
        <div className="small mb-1">SKU: {data.id}</div>
        <h1 className="display-5 fw-bolder">{data.title}</h1>
        <div className="fs-5 mb-3">
          <span>${data.price}</span>
        </div>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
        <div className="d-flex">
        <ItemCount stock="5"/>          
          
        </div>
      </div>
    </div>
  </div>
</section>
    </>
    )


}