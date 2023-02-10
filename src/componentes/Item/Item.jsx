import React from "react";
import './item.css'
import { Link } from "react-router-dom";

function Item ({ id, title, price, detail, imgurl, discount, }){
    
const urlDetail = `/item/${id}`;
   return ( 
        <div className="item-card">
            <Link to={urlDetail}>
            <div>
                <img width={220} height={250} src={imgurl} className="ItemImg" alt="imagen" />
            </div>
            </Link>
            <h3 className="Header">{title}</h3>
            <h4>$ {price}</h4>
            {
                discount && <span style={{color:"green"}}> Descuento: {discount} %</span>  
            }
            
            <p className="Info">{detail}</p>
            <div>
            <Link to={urlDetail} className="Detail">Ver detalle</Link>
            </div>

        </div>
    )
}
export default Item;
