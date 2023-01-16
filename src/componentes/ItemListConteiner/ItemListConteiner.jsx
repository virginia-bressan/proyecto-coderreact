import React, { useEffect, useState } from 'react';
import "./ItemListConteiner.css";
import FlexWrapper from "../flexWrap/flexWrapper"
import Item from "../Item/Item";
import getItems, { getCategoryItems } from "../../services/mockAsyncService";
import { useParams } from "react-router-dom";


function ItemListConteiner() {
 const [products, setProducts] = useState ([]);

 let { categoryid } = useParams(); 
 

  async function getProducts() {
    if (!categoryid){
       let response = await getItems();
       setProducts(response);
    }else {
        let response = await getCategoryItems(categoryid);
        setProducts(response);
    }
  }
 useEffect(() => {
    getProducts();
    }, [categoryid]);
 

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