import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";
import getData from "../../services/asyncMock";


function ItemListContainer() {

    const [products, setProducts] = useState([]);

    async function requestProducts(){
        const response = await getData();
        setProducts(response);
    }

    useEffect(()=>{
        requestProducts();
    }, []);

    return (
        <div className="divContainer">
            {products.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}

export default ItemListContainer;