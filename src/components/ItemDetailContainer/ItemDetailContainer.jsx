import React, { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { Ping } from "@uiball/loaders"; // Importa el componente Ping

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Agrega estado para el loading
  const { id } = useParams();

  async function requestProduct() {
    const response = await getProductData(id);
    setProduct(response);
    setIsLoading(false); // Actualiza el estado una vez que se obtiene el producto
  }

  useEffect(() => {
    requestProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <Ping size={55} speed={2} color="black" />
      </div>
    );
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;