import React from 'react';

import { Container, Form } from './styles';

import Logo from '../../../assets/logo-future-eats-invert.svg';

const Signup: React.FC = () => (
  <Container>
    <div> voltar </div>
    <img src={Logo} alt="Logo Ifuture" />

    <Form>
      <h1>Cadastrar</h1>
      <input type="text" placeholder="Nome e sobrenome" />
      <input type="text" placeholder="email@email.com" />
      <input type="text" placeholder="000.000.000-00" />
      <input type="text" placeholder="Mínimo 6 caracteres" />
      <input type="text" placeholder="Confirme a senha anterior" />
      <button type="submit">Criar</button>
    </Form>
  </Container>
);

export default Signup;
