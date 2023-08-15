import React from 'react';
import { Link } from 'react-router-dom';
import "./OrderConfirmation.css";


function formatDateString(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
}

function OrderConfirmation({ orderId, cart, orderDate }) {
    
    return (
        <div className="order-confirmation">
            <h1>¡Compra Finalizada!</h1>
            <p>Fecha: {formatDateString(orderDate)}</p>
            <p>
                Tus productos

            </p>
            <p>Tu número de orden es: <span className="order-id">{orderId}</span></p>
            <p>Gracias por tu compra.</p>
            <Link to="/">
                <button>Volver a Inicio</button>
            </Link>
        </div>
    );
}


export default OrderConfirmation;