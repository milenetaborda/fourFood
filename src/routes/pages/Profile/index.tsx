/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import { Container } from './styles';

const Profile: React.FC = () => {
  const history = useHistory();

  const goToEditProfile = () => {
    history.replace('/profile/editProfile');
  };

  const goToEditAddress = () => {
    history.replace('/');
  };

  return (
    <Container>
      <h1>Meu Perfil</h1>
      <Header />

      <div className="WrapperInfo">
        <div>
          <main>
            <p>Bruna Oliveira</p>
            <p>bruna_o@gmail.com</p>
            <p>333.333.333-33</p>
          </main>
          <BsPencil onClick={goToEditProfile} />
        </div>

        <aside>
          <div>
            <span>Endereço cadastrado</span>
            <p>Rua Alessandra Vieira, 42 - Santana</p>
          </div>
          <BsPencil />
        </aside>

        <h2>Histórico de pedidos</h2>
        <hr />

        <p>Você não realizou nenhum pedido</p>
      </div>
    </Container>
  );
};

export default Profile;
