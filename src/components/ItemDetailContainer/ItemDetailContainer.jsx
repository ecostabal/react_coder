import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"; // Importa el archivo CSS

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  async function requestProduct() {
    const response = await getProductData(id);
    setProduct(response);
  }

  useEffect(() => {
    requestProduct();
  }, []);

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
      {/* El botón de "Agregar al carrito" no está en el código JSX original,
          puedes agregarlo aquí utilizando la clase "item-detail-add-to-cart" */}
    </div>
  );
}

export default ItemDetailContainer;