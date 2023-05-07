import './Cart.css'
import { useContext } from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity===0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return <div>
        { cart.map(p => <CartItem key={p.id} {...p}/>) }
        {/* { <ul>
            {cart.map((item) => (
              <li key={item}>{item.name}</li>
            ))}
          </ul>
        } */}

                <header className="Header">                    
                    <h3 className="ItemHeader">Total: ${total}</h3>                    
                </header>
                <section>
                <button onClick={() => clearCart()} className='btn btn-sm btn-primary'>Limpiar Carrito</button>
                <p className="Info"></p>
                <Link to='/checkout' className='btn btn-sm btn-primary'>Checkout</Link>
                </section>


        {/* <h3>Total: ${total}</h3> */}
        {/* <button onClick={() => clearCart()} className='Option'>Limpiar Carrito</button>
        <Link to='/checkout' className='Option'>Checkout</Link> */}
    </div>
}

export default Cart