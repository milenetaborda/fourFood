import React from 'react';

import { Container, Form } from './styles';

import Header from '../../../components/Header';

const Adress: React.FC = () => (
  <Container>
    <Header />

    <Form>
      <h1>Meu endereço</h1>
      <input type="text" placeholder="Rua / Av." />
      <input type="text" placeholder="Número" />
      <input type="text" placeholder="Apto. / Bloco" />
      <input type="text" placeholder="Bairro" />
      <input type="text" placeholder="Cidade" />
      <input type="text" placeholder="Estado" />
      <button type="submit">Criar</button>
    </Form>
  </Container>
);

export default Adress;
