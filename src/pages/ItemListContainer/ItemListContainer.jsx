import { useEffect, useState } from "react";
import "./style.css"
import { ItemList } from '../../components/ItemList/ItemList';
import { getItems, getItemsByCategory } from "../../database/db-firestore";
import { useParams } from "react-router-dom";

export function ItemListContainer() {
  const [items, setItems] = useState([]);
  let { category } = useParams();

  useEffect(() => {
    const waitForData = async () => {
      let _items;
      if (category) {
        _items = await getItemsByCategory(category)
      } else {
        _items = await getItems();
      }

      setItems(_items);
    }

    waitForData()

  }, [category])

  return (
    <div className="container">
    <div className="row pt-5 p-5">
      {
        !!items
          ? <ItemList items={items} />
          : 'Loading...'
      }
    </div>
    </div>
  );
}


