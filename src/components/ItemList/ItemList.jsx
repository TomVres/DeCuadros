import { Item } from '../Item/Item.jsx'

export function ItemList({ items }) {

  return (
    <>
      {
        items.map(
          (item) => <Item item={item} key={item.id} />
        )
      }
    </>
  )


}