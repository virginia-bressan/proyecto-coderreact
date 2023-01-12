import React from "react"

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
            <link to={urlDetail}>Ver detalle</link>
            </div>

        </div>
    )
}
export default Item;
