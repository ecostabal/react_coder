import React, { useContext } from 'react';
import "./CartContainer.css";
import { cartContext } from "../../context/cartContext";

function CartContainer() {
    const { cart, removeItem, clearCart, calculateTotalPrice } = useContext(cartContext);
    
    return (
        <div className="cart-widget">
            <h1 className="tituloCarrito">🛒 Tu carrito de compras</h1>
            {cart.length === 0 ? (
                <p className="carritoVacioTxt">El carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.img} alt="" />
                        <h2>{item.title} (x{item.count})</h2>
                        <p>$ {item.price} (Subtotal: $ {item.count * item.price})</p>
                        <button className="eliminarBoton" onClick={() => removeItem(item.id)}>Eliminar Item</button>
                    </div>
                ))
            )}
            {cart.length > 0 && (
                <div className="cart-buttons">
                    <p className="cart-total">💰 Total: $ {calculateTotalPrice().toFixed(2)}</p>
                    <button>Checkout</button>
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    )
}

export default CartContainer;