import "./CartWidget.css";
import { cartContext } from "../../context/cartContext";


function CartWidget(){
    const context = useContext(cartContext);
  
    return (
        <div className="carrito">
            <img className="icono" src="./assets/cart-shopping-solid.svg" alt="Carrito"/>
            <p> {context.getTotalItemsInCart()} </p>
        </div>
        )
    }

export default CartWidget;