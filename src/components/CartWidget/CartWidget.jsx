import React, { useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

function CartWidget() {
    const context = useContext(cartContext);
  
    const totalItemsInCart = context.getTotalItemsInCart();

    return (
        <Link className="carrito" to="/cart">
            <div>
                <img className="icono" src="./assets/cart-shopping-solid.svg" alt="Carrito" />
                {totalItemsInCart > 0 && <p>{totalItemsInCart}</p>}
            </div>
        </Link>
    );
}

export default CartWidget;
