import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import "./NavBar.css"
function NavBar() {
    return (
        <nav>
            <ul className="NavBar">
                <li><img width={60} src="/assets/img/images.jpg" alt="" /></li>  
                <li>
                    <Link to="/">Productos</Link>
                </li>
                <li>
                    <Link to="/category/canopla">Canoplas</Link>
                </li>
                <li>
                    <Link to="/category/mochila">Mochila</Link>
                </li>
                <li>
                    <Link to="/category/fibronesMarcadores">Fibrones Marcadores</Link>
                </li>
                <li>
                    <Link to="/category/cuadernillo">Cuadernillo</Link>
                </li>

                <CardWidget />
            </ul>
        </nav>
    );
}
export default NavBar;
