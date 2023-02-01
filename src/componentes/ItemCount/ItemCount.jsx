import { useState } from 'react';
import './ItemCount.css';

function ItemCount ({onAddToCart}){
    const [count, setCount]= useState(0);

    function handleAdd() {
        setCount (count + 1);
    }

    function handleSubstract() {
        setCount (count - 1);
    }
    return (
        <div className='itemcount'>
            <small>Agrega la cantidad a carrito</small>
            <div className='count'>
                <button className='btn' onClick={handleSubstract}>
                 . ➖ .
                </button>
                <span>{count}</span>
                <button className='btn' onClick={handleAdd}>
                . ➕ . 
                </button>
            </div>

            <div>
                <button className='btn' onClick={onAddToCart(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;



    