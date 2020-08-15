import React, { useState } from 'react';
import { Container } from './styles';

const Navbar: React.FC = () => {
  const [selected, setSelected] = useState(false);

  return (
    <Container>
        <a >Todos</a>
        <a >Burger</a>
        <a>Árabe</a>
        <a>Italiana</a>
        <a>Sorvete</a>
        <a>Petisco</a>
    </Container>
  );
}

export default Navbar;
