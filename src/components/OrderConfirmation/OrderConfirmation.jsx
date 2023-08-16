import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirmation() {
  const [orderData, setOrderData] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      console.log(order);
      setOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Gracias por tu compra! </h1>
      <p>Tu número de órden es {orderData ? orderData.id : "Cargando..."}</p>
    </div>
  );
}

export default OrderConfirmation;