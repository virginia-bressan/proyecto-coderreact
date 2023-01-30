import React, { useEffect, useState } from 'react';
import "./ItemListConteiner.css";
import FlexWrapper from "../flexWrap/flexWrapper";
import getItems, { getCategoryItems } from "../../services/mockAsyncService";
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';


function ItemListConteiner() {
 const [products, setProducts] = useState ([]);
 const [ isLoading, setISLoading] = useParams(true);

 let { categoryid } = useParams(); 
 

  async function getProducts() {
    if (!categoryid){
       let response = await getItems();
       setProducts(response);
       setISLoading(false);
    }else {
        let response = await getCategoryItems(categoryid);
        setProducts(response);
        setISLoading(false);
    }
  }
 useEffect(() => {
    getProducts();
    }, [categoryid]);
 

    if (isLoading)
    return <Loader/>;
    return (
        <>
            <FlexWrapper>
             <div>
                 <ItemList products={products}/>
             </div>
            </FlexWrapper>
        </>
    );
}

export default ItemListConteiner;