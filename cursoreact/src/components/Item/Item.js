import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (        
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}                    
                    </p>                
                </section>
                <footer className="ItemFooter">
                    <Link to={`/item/${id}`} className='Option'>Ver Detalles</Link>
                    {/* <button className='Option'>Ver detalle</button> */}
                </footer>
                {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/> */}
            </article>        
    )
}

export default Item;
