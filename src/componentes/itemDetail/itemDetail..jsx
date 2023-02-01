import './ItemDetail.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, category, imgurl, price, stock, detail}) => {
    
    const { addItem, isInCart } = useContext(cartContext)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)
        addItem({ id, title, price, quantity})
    }
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={imgurl} alt="img" className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {detail}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount stock={stock} onAddToCart={handleOnAdd} />
                        
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail