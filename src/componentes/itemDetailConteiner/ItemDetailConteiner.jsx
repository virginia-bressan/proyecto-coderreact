import React from "react";
import { Link } from "react-router-dom";
import { ButtonChild } from "../button/Button";
import ItemDetail from "../itemDetail/itemDetail.";




function ItemDetailConteiner() {
 
    

    return (
        <> 
            <ItemDetail />
            <Link to="/cart">
             <ButtonChild>Ir al carrito</ButtonChild>
            </Link>
        </>
    );
}

export default ItemDetailConteiner;