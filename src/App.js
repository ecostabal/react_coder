import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from "./context/cartContext";

function App() {
  return (
    <div className="app-body">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>Page not found!</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
