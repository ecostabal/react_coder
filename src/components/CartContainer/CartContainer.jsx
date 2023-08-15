import React, { useContext } from 'react';
import "./CartContainer.css";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
    const { cart, removeItem, clearCart } = useContext(cartContext);
    
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>$ {item.price}</p>
                        <p>Cantidad: {item.count}</p>
                        <p>Precio Total: ${item.count * item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar Item</button>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <div>
                    Precio total de la compra es $ {cart[0].totalPrice}
                    <button>Checkout</button>
                    <button onClick={clearCart}>Vaciar Carrito</button> {/* Llama a clearCart al hacer clic */}
                </div>
            )}
        </div>
    )
}

export default CartContainer;
