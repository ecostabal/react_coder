import React from "react";

function ItemDetail(props) {
  const {product} = props;
    return (
        <div className="item-detail-container"> {/* Aplica la clase CSS para el contenedor principal */}
        <div>
          <img className="item-detail-image" src={product.img} alt="" /> {/* Aplica la clase CSS para la imagen */}
        </div>
        <div>
          <h2 className="item-detail-title">{product.title}</h2> {/* Aplica la clase CSS para el título */}
        </div>
        <div>
          <h4 className="item-detail-price">{product.price}</h4> {/* Aplica la clase CSS para el precio */}
          <small className="item-detail-description">{product.description}</small> {/* Aplica la clase CSS para la descripción */}
        
        </div>
        <ItemCount stock={4} onConfirm={handleAddToCart} />
        <Link to="/">
        <ButtonComponent>Volver al inicio</ButtonComponent>
        </Link>
        <button class="item-detail-add-to-cart">Agregar</button>
      </div>
    )
}

export default ItemDetail