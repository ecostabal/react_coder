import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, link } from "react-router-dom";

function NavBar(props){
    return (
    <div className="encabezado">
        <div className="logo">
            <h2>🐶 Bass Pet Store</h2>
        </div>
        <div className="menu">
            <ul>
                <li><Link className="linkStyle" to="/" href="#">Home</Link></li>
                <li><Link to="/product">Detalle</Link></li>
                <li><Link to="/">Productos</Link></li>
                <li><Link to="/">Contacto</Link></li>
            </ul>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;