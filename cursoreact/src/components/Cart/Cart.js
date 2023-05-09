import './Cart.css'
import { useState,useEffect, useContext } from 'react'
import { Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity } = useContext(CartContext);
    const [total, setTotal] = useState(0);
  
    useEffect(() => {
      let precioTotal = 0;
      cart.forEach((prd) => {
        precioTotal += prd.price * prd.quantity;
      });
      setTotal(precioTotal);
    }, [cart]);
  
    if (totalQuantity === 0) {
      return (
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to="/" className="Option">
            Productos
          </Link>
        </div>
      );
    }
  
    return (
      <div>
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
        <header className="Header">
          <h3 className="ItemHeader">Total: ${total}</h3>
        </header>
        <section>
          <button onClick={() => clearCart()} className="btn btn-sm btn-primary">
            Limpiar Carrito
          </button>
          <p className="Info"></p>
          <Link to="/checkout" className="btn btn-sm btn-primary">
            Checkout
          </Link>
        </section>
      </div>
    );
  };
  
  export default Cart;