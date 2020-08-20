import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header';
import {  Container } from './styles'

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
        <p>Forma de pagamento</p>

        <hr/>


      {/* <Footer /> */}
    </Container>
  )
}

export default Cart;
