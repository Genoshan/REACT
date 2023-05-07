import { CartContext } from '../../context/CartContext';
import './CartWidget.css'
import cart from './assets/cart.jpg'
import  { useContext } from 'react'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  
  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='CartImg' src={cart} alt='cart-widget'/>
        { totalQuantity }
    </Link>  
  )
}
  
export default CartWidget  

//   return (
//     <Container>
//       <Row>
//         <div className="cart-widget align-items-right">
//           <img src={cart} alt="cart-widget" />
//           <span>0</span>
//         </div>
//       </Row>
//     </Container>
//   );
// };


