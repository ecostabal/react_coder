import React, { useContext } from 'react';
import "./CartContainer.css";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
    const { cart, removeItem } = useContext(cartContext);
    
    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? ( // Agrega el condicional para verificar si el carrito está vacío
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
            {cart.length > 0 && ( // Solo muestra el precio total y el botón de checkout si el carrito no está vacío
                <div>
                    Precio total de la compra es $ {cart[0].totalPrice}
                    <button>Checkout</button>
                </div>
            )}
        </div>
    )
}

export default CartContainer;
