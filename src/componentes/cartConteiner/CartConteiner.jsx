import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import { Link } from "react-router-dom";
import  databaseItems  from '../../services/mockAsyncService';

const CartContainer = (id) => {
    const { cart, removeItem, getTotalPriceInCart, clearCart } = useContext(cartContext)
    console.log(cart)
    let item = databaseItems;
    return (
    
        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map((id) => {
                        <div>
                            <h3>{item.title}</h3>
                            <img width="100" src={item.imgurl} alt="img" />
                            <p>{item.price}</p>
                            <p>{item.count}</p>
                            <button onClick={removeItem(id)}>Eliminar producto</button>
                            <button onClick={clearCart()}>Vaciar carrito</button>

                        </div>
                    })}
            </div>
            <small>El total de tu compra es de $ {getTotalPriceInCart()}</small>

            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartContainer ;
