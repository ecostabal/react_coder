import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../services/firebase";
import "./Checkout.css";

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const navigate = useNavigate();
  const { cart, calculateTotalPrice } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: calculateTotalPrice(),
    };

    try {
      const idOrder = await createOrder(orderData);
      console.log("Antes de la redirección");

      navigate(`/order-confirmation/${idOrder}`);
      console.log("Después de la redirección");
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      email: "",
    });
  }

  return (
    <form className="checkout-form">
      <h2>😎 ¡Estás a un sólo paso de comprar tus productos!</h2>

      <div className="input-group">
        <label htmlFor="firstname">Nombre</label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastname">Apellido</label>
        <input
          value={buyer.lastname}
          name="lastname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="age">Email</label>
        <input
          value={buyer.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <button
        className="confirm-button"
        disabled={!(buyer.firstname && buyer.lastname && buyer.email)}
        onClick={handleCheckout}
      >
        Confirmar Compra
      </button>
      <button className="cancel-button" onClick={resetForm}>
        Cancelar
      </button>
    </form>
  );
}

export default Checkout;
