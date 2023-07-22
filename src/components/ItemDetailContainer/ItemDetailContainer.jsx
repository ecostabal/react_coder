import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncMock";
import { useParams } from "react-router-dom"


function ItemDetailContainer() {
    const [product,setProduct] = useState({});
    const { id } = useParams();
   
    async function requestProduct(){
        const response = await getProductData(id);
        setProduct(response);
    }

    useEffect(() => {
        requestProduct();
    }, []);

    return(
        <>
        <div>
            <img src={product.img} alt="" />
        </div>
        <div>
            <h2>{product.title}</h2>
        </div>
        <div>
            <h4>{product.price}</h4>
            <small>{product.description}</small>
        </div>
    </>
    )
}

export default ItemDetailContainer;