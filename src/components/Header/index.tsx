import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { Container } from './styles';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useHistory();

  const goToBackPage = () => {
    window.history.back();
  };

  return (
  < Container >
    <FiChevronLeft onClick={goToBackPage} />
  </Container >
  )
};

export default Header;
