import React, { useContext, useState } from 'react';
import "./CartContainer.css";
import { cartContext } from "../../context/cartContext";
import { createOrder } from '../../services/firebase';
import { Link } from 'react-router-dom';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

function CartContainer() {
    const { cart, removeItem, clearCart, calculateTotalPrice } = useContext(cartContext);
    const [orderId, setOrderId] = useState(null);
    const [orderDate, setOrderDate] = useState(null);
    
    async function handleCheckout() {
        const currentDate = new Date();
        const orderData = {
            items: cart,
            buyer: { name: "Enrique", email: "ecostabal@miuandes.cl", phone: "56976184596" },
            date: currentDate, // No es necesario usar setOrderDate() aquí
            total: calculateTotalPrice(),
        }
        const idOrder = await createOrder(orderData);
        setOrderId(idOrder);
        setOrderDate(currentDate);
        clearCart();
    }

    return (
        <div className="cart-widget">
        {orderId ? (
            <OrderConfirmation orderId={orderId} cart={cart} orderDate={orderDate} />
            ) : (
            <>
                <h1 className="tituloCarrito">🛒 Tu carrito de compras</h1>
                {cart.length === 0 ? (
                    <>
                    <div className="carritoVacio">
                        <img src="https://www.svgrepo.com/show/529448/cart-cross.svg" alt=""/>
                    </div>
                    <p className="carritoVacioTxt">El carrito está vacío</p>
                    </>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={item.img} alt={item.title} />
                                <h2>{item.title} (x{item.count})</h2>
                                <p>Valor Unitario: ${item.price} (Subtotal: ${(item.count * item.price).toFixed(2)})</p>
                                <button className="eliminarBoton" onClick={() => removeItem(item.id)}>Eliminar Item(s)</button>
                                <Link to={`/product/${item.id}`}>
                                    <button className="verProductoBoton">Ver Producto</button>
                                </Link>
                            </div>
                        ))}
                        <div className="cart-buttons">
                            <p className="cart-total">💰 Total: $ {calculateTotalPrice().toFixed(2)}</p>
                            <Link to="/checkout">
                                <button>Proceed to Checkout</button>
                            </Link>
                            <button onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                )}
            </>
        )}
    </div>
    )
}

export default CartContainer;