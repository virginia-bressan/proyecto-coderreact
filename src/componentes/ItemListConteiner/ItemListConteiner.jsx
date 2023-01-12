import React, { useEffect, useState } from 'react';
import "./ItemListConteiner.css";
import FlexWrapper from "../flexWrap/flexWrapper"
import Item from "../Item/Item";
import getItems from "../../services/mockAsyncService"

function ItemListConteiner() {
 const [products, setProducts] = useState ([]);
 
 useEffect ( () => {
    getItems().then((respuesta) => {
        console.log(respuesta)
        setProducts(respuesta)
     });
  }, []) ;
 

    return (
        <>
            <FlexWrapper>
                {products.map((item) => (
                <Item 
                key={item.title}
                id={item.id}
                title={item.title} 
                price={item.price} 
                detail={item.detail} 
                imgurl={item.imgurl} 
                />
                ))}
            </FlexWrapper>
        </>
    );
}

export default ItemListConteiner;