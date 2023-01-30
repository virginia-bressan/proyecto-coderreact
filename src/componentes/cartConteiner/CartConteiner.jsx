import { useContext } from "react"
import { cartContext} from "../../storage/cartContext";
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext)
 console.log(cart)
    return (
        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map((item) => {
                        <div>
                            <h3>{item.title}</h3>
                            <img width="100" src={item.imgurl} alt="img" />
                            <p>{item.price}</p>
                            <p>{item.count}</p>
                        </div>
                    })}
            </div>
            <small>El total de tu compra es de $ {getTotalPriceInCart ()}</small>

            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartContainer