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
                    <Link to="/item">detalle</Link>
                </li>

                <CardWidget />
            </ul>
        </nav>
    );
}
export default NavBar;
