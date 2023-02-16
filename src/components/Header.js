import React, { useContext } from "react";
import { styles } from "./styles";

import { ItemsContext } from "../itemsContext";

const Header = () => {
  const { items, setItems, foo } = useContext(ItemsContext);

  const newState = [
    { id: 45454, name: "New Keyboard Dell Bluetooth", price: 220 },
    { id: 45458, name: "New Mouse Dell Bluetooth", price: 60 },
    { id: 45458, name: "Headeset Bluetooth", price: 180 },
  ];

  return (
    <div style={styles.header}>
      <h1>E-Commerce</h1>
      <p>Items: {items.length} </p>
      <button onClick={() => setItems(newState)}>Change State</button>
      <button onClick={() => setItems([])}>Clear</button>
      <button onClick={() => foo()}>Alert Quantity Items</button>
    </div>
  );
};

export default Header;
