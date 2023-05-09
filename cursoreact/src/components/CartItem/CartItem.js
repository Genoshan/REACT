
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({id, name, img, price, stock, quantity}) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
      };

    return (        
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {name}
                    </h2>
                </header>
                <section>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Cantidad: {quantity}
                    </p>  
                    <button onClick={handleRemove} className="btn btn-sm btn-danger">Eliminar</button>
             
                </section>           
            </article>        
    )
}

export default CartItem