
const CartItem = ({id, name, img, price, stock}) => {
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
             
                </section>           
            </article>        
    )
}

export default CartItem