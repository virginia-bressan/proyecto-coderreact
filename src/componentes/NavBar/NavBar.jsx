import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css"
function NavBar() {
    return (
        <nav>
            <ul className="NavBar">
                <li><img width={60} src="/assets/img/images.jpg" alt="" /></li>  
                <li>
                    <a href="/">Productos</a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Envios</a>
                </li>
                <li>
                    <a href="/">¿Quienes Somos?</a>
                </li>

                <CardWidget />
            </ul>
        </nav>
    );
}
export default NavBar;
