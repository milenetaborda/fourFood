import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { getRestaurantDetail } from '../../../store/modules/RestaurantStore/actions';
import Header from '../../../components/Header';

const Restaurant: React.FC = () => {
  const restaurantDetails = useSelector(
    (state: any) => state.restaurants.restaurantId,
  );
  const [restaurantById, setRestaurantById] = useState(restaurantDetails);

  // Milene - favor gravar as informações para quando dar f5 as informações ficarem na tela

  if (!restaurantDetails) {
    return <div>Carregando ...</div>;
  }

  return (
    <Container>
      <h1>Restaurante</h1>
      <Header />
      <section>
        <img alt="Logo Restaurante" src={restaurantById.logoUrl} />
        <h2>{restaurantById.name}</h2>
        <p>{restaurantById.category}</p>
        <p>{restaurantById.deliveryTime}</p>
        <p>{restaurantById.shipping}</p>
        <p>{restaurantById.address}</p>
      </section>
      <ul>
        <h1>Principais</h1>
      </ul>
    </Container>
  );
};

export default Restaurant;
