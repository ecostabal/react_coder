import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";
import getData, { getCategoryData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {
      async function requestProducts() {
        let response = categoryId
          ? await getCategoryData(categoryId)
          : await getData();
        setProducts(response);
      }

        requestProducts();
      }, [categoryId]);

    return <ItemList products={products}/>
}

export default ItemListContainer;