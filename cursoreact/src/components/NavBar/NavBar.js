import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
      <Navbar className="my-navbar" bg="success" variant="dark" expand="lg">
        <Link to='/'>          
          <Navbar.Brand>HW STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
        <div className='Categories'>
        <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
        <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablets</NavLink>
        <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
        </div>
        <CartWidget/>
          </Nav>
          </Navbar.Collapse>
        </Link>
        </Navbar>
    );
  };
  
export default NavBar;