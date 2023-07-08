import "./CartWidget.css";


function CartWidget(props){
    return (
        <div className="carrito">
            <img className="icono" src="./assets/cart-shopping-solid.svg" alt="Carrito"/>
            <p>0</p>
        </div>
        )
    }

export default CartWidget;