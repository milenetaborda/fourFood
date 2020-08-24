import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants, getRestaurantDetail, setFilter } from '../../../store/modules/RestaurantStore/actions';
import { Restaurants } from '../../../models/restaurant.interface';
import Footer from '../../../components/Footer';
import {useHistory} from 'react-router-dom';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmitRestaurantDetail = (id: string) => {
    dispatch(
      getRestaurantDetail(id, history)
    )
  };

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  const allRestaurants = useSelector((state: any) => state.restaurants.allRestaurants);
  const filterRestaurants = useSelector((state: any) => state.restaurants.filter);

  const filterRestaurantsByCategory =
    filterRestaurants === "all" ? allRestaurants : allRestaurants?.filter((rest: Restaurants) => rest.category === filterRestaurants);

  return (
    <>
    <Container>
      <h1>Ifuture</h1>

      <Header />
      <input placeholder="Restaurante" ></input>

      <Navbar />
      <ul>
        {filterRestaurantsByCategory?.map((rest: any) => (
          <li key={rest.id} onClick={() => onSubmitRestaurantDetail(rest.id)}>
            <img src={rest.logoUrl} alt={rest.name} />
            <strong>{rest.name}</strong>
            <span>{rest.deliveryTime} min</span>
            <span>Frete: R${rest.shipping}</span>
          </li>
        ))}
      </ul>

    </Container >
    <Footer />
    </>
  );
}

export default Home;
