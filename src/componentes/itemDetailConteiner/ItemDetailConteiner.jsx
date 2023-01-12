import React, {  useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getSingleItems } from "../../services/mockAsyncService"
import FlexWrapper from '../flexWrap/flexWrapper';


function ItemDetailConteiner () {
    const [product, setProduct] = useState ([]);
    
    let { itemid } = useParams (); 

    useEffect(() => {
        getSingleItems(itemid)
        .then((respuesta) => {
            setProduct(respuesta);
        })
        .catch((error) => alert(`Error: ${error}`));
    }, [itemid]);
    
   
       return (
           <>
           <FlexWrapper>
            <div className='card-detail'>
               <h1>Titulo: {product.title} </h1>
               <img src={product.imgurl} alt={product.title} />
               <h2>Precio:{product.price}</h2>
               <small>{product.detail}</small>
            </div>
            </FlexWrapper>
           </>
       );
}

export default ItemDetailConteiner;