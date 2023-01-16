import React, { useEffect, useState } from 'react';
import "./ItemListConteiner.css";
import FlexWrapper from "../flexWrap/flexWrapper"
import Item from "../Item/Item";
import getItems, { getCategoryItems } from "../../services/mockAsyncService";
import { useParams } from "react-router-dom";


function ItemListConteiner() {
 const [products, setProducts] = useState ([]);

 let { categoryid } = useParams(); 
 
 useEffect ( () => {
    if (categoryid){
    getCategoryItems(categoryid).then((respuesta) => {
        console.log(respuesta);
        setProducts(respuesta);
     });
    }
    else 
    {
        getItems().then((respuesta) => {
            console.log(respuesta);
            setProducts(respuesta);
         });
        }
  }, [categoryid]) ;
 

    return (
        <>
            <FlexWrapper>
                {products.map((item) => (
                <Item 
                key={item.title}
                id={item.id}
                title={item.title} 
                price={item.price}  
                imgurl={item.imgurl} 
                />
                ))}
            </FlexWrapper>
        </>
    );
}

export default ItemListConteiner;