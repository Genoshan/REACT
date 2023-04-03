import React from 'react';
import { Container, Row } from 'react-bootstrap';
import cart from './assets/cart.svg';

const CartWidget = () => {
  return (
    <Container>
      <Row>
        <div className="d-flex align-items-right">
          <img src={cart} alt="cart-widget" />
          <span>0</span>
        </div>
      </Row>
    </Container>
  );
};

export default CartWidget;
