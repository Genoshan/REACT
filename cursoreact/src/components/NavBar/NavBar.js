import './NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
      <Navbar className="my-navbar" bg="success" variant="dark" expand="lg">
        <Navbar.Brand href="#home">HW STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="Celulares">Celulares</Nav.Link>
            <Nav.Link href="Tablets">Tablets</Nav.Link>
            <Nav.Link href="Notebooks">Notebooks</Nav.Link>
            <CartWidget/>
          </Nav>          
        </Navbar.Collapse>        
      </Navbar>
      
    );
  };
  
export default NavBar;