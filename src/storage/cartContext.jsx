const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([]);

    function addItem(item) {
        let newCart = [...cart];
        const iteminCart = cart.find(iteminCart => iteminCart.id === item.id)
        newCart.push(item);
        setCart(newCart);
    }

    function removeItem(id) {
        // Código para buscar y eliminar el item con el id específico
        const items = [...cart.items];
        const updatedItems = items.filter(item => item.id !== id);
        // Actualiza la lista de items con los items restantes después de eliminar el item con el id específico
        cart.items = updatedItems;
    }
    function getTotalItems() {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        });
        return total;

    }
    return (
        <cartContext.Provider value={{ cart, addItem, getTotalItems, removeItem }}>
            {props.children}
        </cartContext.Provider>
    );
}


