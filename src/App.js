import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
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
            <Route path="/cart" element={<CartContainer/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
            <Route path="*" element={<h1>Page not found!</h1>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
