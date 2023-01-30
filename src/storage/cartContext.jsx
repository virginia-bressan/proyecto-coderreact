const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props){
    const [cart , setCart] = useState([]);

    function addItem(item){
        let newCart = [...cart];
        const iteminCart = cart.find(iteminCart =>iteminCart.id === item.id)
        newCart.push(item);
        setCart(newCart);
    }
    
    function removeItem(id) {

    }
    
    function getTotalItems() {
        let total = 0;
        cart.forEach( (item) => total);
        return total;
    }
    return (
    <cartContext.Provider value={{ cart, addItem, getTotalItems, removeItem }}>
        {props.children}
    </cartContext.Provider>
    );
}