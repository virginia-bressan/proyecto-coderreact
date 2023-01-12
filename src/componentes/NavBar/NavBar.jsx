import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css"
function NavBar() {
    return (
        <nav>
            <ul className="NavBar">
                <li><img width={60} src="/assets/img/images.jpg" alt="" /></li>  
                <li>
                    <link to="/">Productos</link>
                </li>
                <li>
                    <link to="/">Home</link>
                </li>
                <li>
                    <link to="/">Envios</link>
                </li>
                <li>
                    <link to="/">¿Quienes Somos?</link>
                </li>

                <CardWidget />
            </ul>
        </nav>
    );
}
export default NavBar;
