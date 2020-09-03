/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import { Container } from './styles';

const Cart: React.FC = () => {
  return (
    <Container>
      <h1>Meu carrinho</h1>
      <Header />
      <aside>
        <span>Endereço de entrega</span>
        <p>Rua Alessandra Vieira, 42 - Santana</p>
      </aside>
      <p>Carrinho vazio</p>
      <h2>Subtotal</h2>
      <p>R$0,00</p>
      <p>Forma de pagamento</p>
      <hr />
      <div className="box">
        <ul>
          <li>
            <input type="radio" id="s-option" name="selector" />
            <label htmlFor="s-option">Dinheiro</label>
            <div className="check" />
          </li>

          <li>
            <input type="radio" id="d-option" name="selector" />
            <label htmlFor="d-option">Cartão de crédito</label>
            <div className="check">
              <div className="inside" />
            </div>
          </li>
        </ul>
      </div>
      <button type="button">Confirmar</button>
      {/* <Footer /> */}
    </Container>
  );
};

export default Cart;
