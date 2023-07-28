import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";
import getData, { getCategoryData } from "../../services/asyncMock";
import { useParams } from "react-router-dom";



function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
  
    async function requestProducts() {
      let response = categoryId
        ? await getCategoryData(categoryId)
        : await getData();
      setProducts(response);
    }

    useEffect(() => {
        requestProducts();
      }, [categoryId]);

    return (
        <div className="divContainer">
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ItemListContainer;