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
                <li className="nav-item">
                    <Link className="nav-link" to="/" href="#">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Tienda
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/juguetes">
                        Juguetes
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/accesorios">
                        Accesorios
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/comida">
                        Comida
                    </Link>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </div>
    )
}

export default NavBar;