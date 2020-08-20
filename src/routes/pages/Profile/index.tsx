import React from 'react'
import Header from '../../../components/Header';
import { Container } from './styles';



const Profile: React.FC = () => {
  return (
    <Container>
      <h1>Meu Perfil</h1>
      <Header />

      <div className="WrapperInfo">
        <div>
        <p>Bruna Oliveira</p>
        <p>bruna_o@gmail.com</p>
        <p>333.333.333-33</p>
        </div>

        <aside>
          <span>Endereço cadastrado</span>
          <p>Rua Alessandra Vieira, 42 - Santana</p>
        </aside>

        <h2>Histórico de pedidos</h2>
        <hr/>

        <p>Você não realizou nenhum pedido</p>
      </div>
    </Container>
  )
}

export default Profile;
