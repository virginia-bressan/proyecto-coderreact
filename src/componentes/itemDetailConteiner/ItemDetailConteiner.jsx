
import { useState, useEffect } from 'react'
import getItems, { getProductById } from '../../services/mockAsyncService'
import ItemDetail from '../itemDetail/itemDetail.'

import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        getItems(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <h1>Detalle {product.name}</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer