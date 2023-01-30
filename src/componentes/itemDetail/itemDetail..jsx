import React, {  useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { getSingleItems } from "../../services/mockAsyncService"
import FlexWrapper from '../flexWrap/flexWrapper';
import { cartContext } from "../../storage/cartContext";
import ItemCount from "../ItemCount/ItemCount";


function ItemDetail () {
    const [product, setProduct] = useState ([]); 
    let { itemid } = useParams();  
    const {addItem, removeItem} = useContext (cartContext);
    

     function handleAddToCart(count){
        alert(`Agregaste ${count} de ${product.title} al carrito😎`);
        product.count = count;
        addItem(product);
        
    }


    useEffect(() => {
        getSingleItems(itemid)
        .then((respuesta) => {
            setProduct(respuesta);
        })
        .catch ((error) => alert (`Error: ${error}`));
    }, [itemid]);
    
   
       return (
           <>
           <FlexWrapper>
            <div className='card-detail'>
               <h1>Titulo: {product.title} </h1>
               <img src={product.imgurl} alt={product.title} />
               <h2>Precio: ${product.price}</h2>
               <small>{product.detail}</small>
            </div>
            </FlexWrapper>
            <ItemCount onAddToCart={handleAddToCart}/>
           <button onClick={() => removeItem (product.id)}>eliminar Item</button>
           </>
       );
}

export default ItemDetail;