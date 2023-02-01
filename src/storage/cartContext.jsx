const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addItem(item) {
        const IsInCart = cart.some(iteminCart => iteminCart.id === item.id)
        if (IsInCart){
            let newCart = [...cart];
            let index = cart.findIndex(iteminCart => iteminCart.id === item.id)
            newCart([index])
        }
        else{
            setCart([...cart, item]); 
        }
       
    };
    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    function removeItem(id) {
        const items = [...cart.items];
        const updatedItems = items.filter(item => item.id !== id);
        cart.items = updatedItems;
    }
    function clearCart(){

    }
    function getTotalItems() {
        //const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        });
        return total;

    }
    return (
        <cartContext.Provider value={{ cart, addItem, getTotalItems, removeItem, clearCart, isInCart}}>
            {props.children}
        </cartContext.Provider>
    );
}


