import React, { useEffect, useState } from 'react';
import "./ItemListConteiner.css";
import { getCategoryItems } from "../../services/firebase";
import { getItems } from '../../services/firebase';
import { useParams } from "react-router-dom";
import ItemList from '../itemList/ItemList';
import Loader from '../loader/Loader';


function ItemListConteiner() {
 const [products, setProducts] = useState ([]);
 const [ isLoading, setISLoading] = useState(true);

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
            
             <div className='ItemList'>
                 <ItemList products={products}/>
             </div>
           
        </>
    );
}

export default ItemListConteiner;

