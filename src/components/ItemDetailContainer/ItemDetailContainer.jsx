import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css"; // Importa el archivo CSS
import ItemDetail from "../ItemDetail/ItemDetail";

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

  return <ItemDetail product = {product} />
  
}

export default ItemDetailContainer;