import React, { useState, useEffect } from "react";
import { getProductData } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { Ping } from "@uiball/loaders";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function requestProduct() {
    const response = await getProductData(id);
    setProduct(response);
    setIsLoading(false);
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