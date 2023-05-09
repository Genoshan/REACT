import { CartContext } from '../../context/CartContext';
import './CartWidget.css'
import cart from './assets/cart.jpg'
import  { useContext } from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  console.log ("totalQuantity")
  console.log (totalQuantity)
  
  return (
    <Link to='/cart' className='CartWidget' >
        <img className='CartImg' src={cart} alt='cart-widget'/>
        {totalQuantity ?? 0}
    </Link>  
  )
}
  
export default CartWidget

