import { useState, useEffect, useContext } from "react";
import { getData, getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id } = useParams();

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);
  const maxItems = itemInCart? product.stock - itemInCart.count : product.stock 

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(clickCount) {
    addToCart(product, clickCount);
    setIsAddedToCart(true);
    toast.success(`${clickCount} producto(s) agregado(s).`);
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
      <h4 className="item-detail-price">$ {product.price}</h4> {/* Aplica la clase CSS para el precio */}
      <small className="item-detail-description">{product.description}</small> {/* Aplica la clase CSS para la descripción */}
    
    </div>
    {product.stock > 0 ? (
        /* Si tenemos STOCK */
        isAddedToCart ? (
          <Link to="/cart" className="irAlCarrito">Ir al carrito</Link>
        ) : (
          <ItemCount stock={maxItems} onConfirm={handleAddToCart} />
        )
      ) : (
        // END si tenemos stock
        <p>No hay stock disponible</p>
      )}
    {itemInCart && (
      <p>¡Agregaste {itemInCart.count} unidades de este producto!</p>
    )}
    <Link to="/">
        <button className="volverBoton">Volver al inicio</button>
    </Link>
    <ToastContainer/>
  </div>
  );
}

export default ItemDetailContainer;