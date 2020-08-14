import React from 'react';

import { Container, Form } from './styles';
import { useHistory } from 'react-router-dom';

import Logo from '../../../assets/logo-future-eats-invert.svg';

const Login: React.FC = () => {
  const history = useHistory();

  const goToSignup = () => {
    history.replace("/signup");
  }

  return (
    <Container>
      <img src={Logo} alt="Logo Ifuture" />

      <Form>
        <h1>Entrar</h1>
        <input type="text" placeholder="email@email.com" />
        <input type="password" placeholder="Mínimo 6 caracteres" />
        <button type="submit">Entrar</button>
      </Form>
      <span>
        Não possui cadastro?
      <strong onClick={goToSignup}>Clique aqui</strong>
      </span>
    </Container>
  );
};

export default Login;
