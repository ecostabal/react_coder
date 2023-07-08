import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar(props){
    return (
    <div className="encabezado">
        <div className="logo">
            <h2>🐶 Bass Pet Store</h2>
        </div>
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Quienes Somos</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;