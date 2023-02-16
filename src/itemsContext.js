import { useState, createContext } from "react";

// 1 - CREAMOS EL CONTEXTO
// 2 - CREAR EL COMPONENTE PROVIDER
// 3 - RETONAR NUESTRO CONTEXT CON UN .PROVIDER
/* 4 - PROPS.CHILDREN O BIEN CHILDREN */

export const ItemsContext = createContext();

const itemsInStock = [
  { id: 1, name: "MacBook Pro", price: 1800 },
  { id: 2, name: "Lenovo Legion", price: 1250 },
  { id: 3, name: "Asus", price: 700 },
  { id: 4, name: "Dell Vostro", price: 500 },
];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(itemsInStock);

  const foo = () => {
    alert(`Cantidad de items en nuestro carrito: ${items.length}`);
  };

  return (
    <ItemsContext.Provider value={{ items, setItems, foo }}>
      {children}
    </ItemsContext.Provider>
  );
};
