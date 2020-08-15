import React from 'react';
import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div className="scrollmenu">
        <a>Home</a>
        <a >News</a>
        <a>Contact</a>
        <a>About</a>
        <a>Support</a>
        <a>Blog</a>

      </div>
    </Container>
  );
}

export default Navbar;
