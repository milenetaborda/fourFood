/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from './styles';
import { getRestaurantDetail } from '../../../store/modules/RestaurantStore/actions';
import Header from '../../../components/Header';

const Restaurant: React.FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const restaurant = useSelector(
    (state: any) => state.restaurants.restaurantId,
  );

  useEffect(() => {
    dispatch(getRestaurantDetail(id, history));
  }, []);

  if (!restaurant) {
    return <div>Carregando ...</div>;
  }

  return (
    <Container>
      <h1>Restaurante</h1>
      <Header />
      <section>
        <img alt="Logo Restaurante" src={restaurant.logoUrl} />
        <h2>{restaurant.name}</h2>
        <p>{restaurant.category}</p>
        <p>{restaurant.deliveryTime}</p>
        <p>{restaurant.shipping}</p>
        <p>{restaurant.address}</p>
      </section>
      <ul>
        <h1>Principais</h1>
      </ul>
    </Container>
  );
};

export default Restaurant;
