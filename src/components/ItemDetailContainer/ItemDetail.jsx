import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/asyncMock";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    alert(`Producto agregado al carrito, cantidad: ${clickCount}`);
  }

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
  );
}

export default ItemDetailContainer;