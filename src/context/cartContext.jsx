import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });


function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    const newCart = cart.map((item) => item);
    if (isInCart(product.id)) {
      const indexUpdate = cart.findIndex((item) => item.id === product.id);
      newCart[indexUpdate].count += count;
      newCart[indexUpdate].totalPrice = newCart[indexUpdate].count * newCart[indexUpdate].price; // Actualiza el totalPrice con el nuevo cálculo
      setCart(newCart);
    }
    else {
      const newItemInCart = { ...product, count, totalPrice: product.price * count };
      newCart.push(newItemInCart);
      setCart(newCart);
    }
  }

  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }

  function getItemInCart(id) {
    return cart.find((item) => item.id === id);
  }

  function removeItem(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function calculateTotalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.totalPrice;
    });
    return total;
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
        calculateTotalPrice,
        getItemInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };