import { useContext } from "react";
import ItemCard from "./ItemCard";

import { ItemsContext } from "../itemsContext";

const ItemsList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div style={{ padding: "25px" }}>
      <h1>Item List:</h1>
      {items.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsList;
