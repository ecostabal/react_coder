import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import { cartContext } from "../../context/cartContext";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);
  const { clearCart } = useContext(cartContext);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
      clearCart();
    });
  }, [id, clearCart]);

  return (
    <div className="order-confirmation-container">
        <img src="https://www.svgrepo.com/show/411794/buy.svg" alt="" />
        <h1>¡Gracias por tu compra! </h1>
        <p>Tu número de órden es {orderData ? orderData.id : "Cargando..."}</p>
        <Link to="/">
            <button>Volver a Tienda</button>
        </Link>
    </div>
  );
}

export default OrderConfirmation;