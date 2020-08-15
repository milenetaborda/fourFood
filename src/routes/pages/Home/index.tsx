import React from 'react';

import { Container } from './styles';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Ifuture</h1>

      <Header />
      <input placeholder="Restaurante" ></input>

    <Navbar />

      <section>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />
        <strong>Vinil Butantã</strong>
      <span>50 - 60 min</span>
      </section>

      <section>
        <img src="https://cdn.zeplin.io/5dd5ab8e5fb2a0060f81698f/assets/C78C3992-5FF3-4F52-8632-E1CA759C9C9F.png" />
        <strong>Vinil Butantã</strong>
      <span>50 - 60 min</span>
      </section>

    </Container>
  );
}

export default Home;
