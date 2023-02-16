import "./App.css";

// COMPONENTS
import Header from "./components/Header";
import ItemList from "./components/ItemList";

// 5 - IMPORTO MI CONTEXT PROVIDER
import { ItemsProvider } from "./itemsContext";

const App = () => {
  return (
    <ItemsProvider>
      <div className="App">
        <Header />
        <ItemList />
      </div>
    </ItemsProvider>
  );
};

export default App;
