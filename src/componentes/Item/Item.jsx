import React from "react"
import { Link } from "react-router-dom";

function Item ({ id, title, price, detail, imgurl,  }){
    
const urlDetail = `/item/${id}`;
   return ( 
        <div className="item-card">
            <div>
                <img width={220} height={250} src={imgurl} alt="imagen" />
            </div>
            <h3>{title}</h3>
            <h4>$ {price}</h4>
            <p>{detail}</p>
            <div>
            <Link to={urlDetail}>Ver detalle</Link>
            </div>

        </div>
    )
}
export default Item;
