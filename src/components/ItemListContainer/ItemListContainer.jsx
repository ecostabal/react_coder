import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getData, getCategoryData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Ping } from "@uiball/loaders";



function ItemListContainer() {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { categoryId } = useParams();
  
    useEffect(() => {
      setIsLoading(true);
      async function requestProducts() {
        let response = categoryId
          ? await getCategoryData(categoryId)
          : await getData();
        setProducts(response);
        setIsLoading(false);
      }

        requestProducts();
      }, [categoryId]);

      if (isLoading) {
        return (
          <div className="loader">
            <Ping size={55} speed={2} color="black" />
          </div>
        );
      } else {
        return products.length === 0 ? (
          <p className="loader">No hay productos disponibles para esta categoría.</p>
        ) : (
          <ItemList products={products} />
        );
      }
}

export default ItemListContainer;