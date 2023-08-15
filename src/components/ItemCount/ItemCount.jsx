import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === props.stock) {
    } else {
      setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div className="counter-completo">
      <div className="counter">
        <button disabled={ props.stock === 0} className="item-count-button" onClick={handleClickSub}>-</button>
        <span className="count-text">{clickCount}</span>
        <button disabled={ props.stock === 0} className="item-count-button" onClick={handleClickAdd}>+</button>
      </div>
      <button disabled={ props.stock === 0} onClick={() => props.onConfirm(clickCount)} className="item-count-button add-to-cart-button">Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;