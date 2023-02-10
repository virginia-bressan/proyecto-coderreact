import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./CartConteiner.css";
import { ButtonChild } from "../button/Button";
import { createBuyOrder } from "../../services/firebase";
import { useState } from "react";


const CartContainer = (id) => {
    const { cart, removeItem, getTotalPriceInCart, clearCart } = useContext(cartContext)
    const [ orderId, setOrderId ] = useState(null);

    async function handleCheckout(evt){
        const items = cart.map (product => ({ 
            id: product.id, 
            title: product.title,
            price: product.price,
            count: product.count,
        }))
        const order = {
            buyer: {
                name: "sakjs",
                email: "ahjsdh",
            },
            items: items,
            date: new Date(),
            total: getTotalPriceInCart(),
        };

        let id = await createBuyOrder(order);

        setOrderId(id)
    }

    if (orderId ===! null)
    return (
        <div>
            <h1>Muchas gracias por tu compra 🤩</h1>
            <p>El ID de tu compra es: {orderId}</p>
        </div>
    );
    return (
        <>
        <div>
            <h1>Tu carrito</h1>
            <div>
                {
                    cart.map((item) => {
                        return(
                        <div className="card">
                            <h3>{item.title}</h3>
                            <img width="100" src={item.imgurl} alt="img" />
                            <p> Cantidad: {item.quantity}</p>
                            <p> $ {item.price} c/u</p>
                            <p>{item.count}</p>
                            <p>Subtotal: $ {item.price * item.quantity}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                            <button onClick={()=>clearCart()}>Vaciar carrito</button>
                            
                        </div>
                        );
                    })}
            </div>
            <h3 className="totalComp">El total de tu compra es de $  {getTotalPriceInCart()}  </h3>
        </div> 
        <ButtonChild onTouch={()=>handleCheckout()}> Finalizar Compra </ButtonChild>
        </>
        );
    }
    

export default CartContainer;
