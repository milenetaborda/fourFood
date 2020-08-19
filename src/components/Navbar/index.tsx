import React, { useState } from 'react';
import { Container, Button } from './styles';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/modules/RestaurantStore/actions';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState<string>('all');

  const setFilterByCategory = (tag: string) => {
    setCategory(tag);
  };

  dispatch(
    setFilter(category)
  );

  return (
    <Container>
      <Button  onClick={() => setFilterByCategory('all')}  >Todos</Button>
      <Button onClick={() => setFilterByCategory('Hamburguer')}>Burger</Button>
      <Button onClick={() => setFilterByCategory('Árabe')}>Árabe</Button>
      <Button onClick={() => setFilterByCategory('Asiática')}>Asiática</Button>
      <Button onClick={() => setFilterByCategory('Italiana')}>Italiana</Button>
      <Button onClick={() => setFilterByCategory('Sorvetes')}>Sorvete</Button>
      <Button onClick={() => setFilterByCategory('Petiscos')}>Petisco</Button>
    </Container>
  );
};

export default Navbar;
