import React, { useEffect } from 'react';
import { Container } from './styles';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { getRestaurants } from '../../../store/modules/RestaurantStore/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch])

  const restaurant = useSelector((state: any) => state.restaurants.allRestaurants)
  console.log(restaurant)
  return (
    <Container>
      <h1>Ifuture</h1>

      <Header />
      <input placeholder="Restaurante" ></input>

      <Navbar />

      <ul>
        {restaurant?.map((rest: any) => (
          <li>
            <img src={rest.logoUrl} alt={rest.name} />
            <strong>{rest.name}</strong>
            <span>{rest.deliveryTime} min</span>
            <span>Frete: R${rest.shipping}</span>
          </li>
        ))}
      </ul>

    </Container >
  );
}

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants
})

export default Home;
