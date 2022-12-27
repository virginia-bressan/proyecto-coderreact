import "./ItemListConteiner.css"
import React from 'react';

function ItemListConteiner(props) {
    return (
        <h1 style={{color:props.color}} className="title">{props.text}</h1>
 );}

export default ItemListConteiner;