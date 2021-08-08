import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./style.css"
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { getItemDetail } from "../../database/db-firestore";
export function ItemDetailContainer() {
  let [item, setItem] = useState({});
  let { slug } = useParams();

  useEffect(() => {
    const waitForData = async () => {
      let _item = await getItemDetail(slug);
      setItem(_item);
    }
    waitForData();
  }, [])



  return (  
   <div className="container">
    <div className="row">
      <ItemDetail item={item} />
    </div>
  </div>
  );
}

