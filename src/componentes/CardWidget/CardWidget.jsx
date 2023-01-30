import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';


function CardWidget(props) {
const { getTotalItems } = useContext (cartContext)
    return (
        <div>
            <img width={30} className="Logo" src="/assets/img/carrito.png" alt="" />
            {getTotalItems()}
        </div>
    );
}

export default CardWidget;