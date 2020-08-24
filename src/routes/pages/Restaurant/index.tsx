import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import { getRestaurantDetail } from '../../../store/modules/RestaurantStore/actions';

const Restaurant: React.FC = () => {
  const restaurantById = useSelector((state: any) => state.restaurants.restaurantId);

  const filterRestaurantsByCategory =
  restaurantById.products?.filter((rest: any) => rest.category === "" );

  console.log(filterRestaurantsByCategory)

  return (

    <Container>
      <section>
        <img src={restaurantById.logoUrl} />
        <h2>{restaurantById.name}</h2>
        <p>{restaurantById.category}</p>
        <p>{restaurantById.deliveryTime}</p>
        <p>{restaurantById.shipping}</p>
        <p>{restaurantById.address}</p>
      </section>
      <ul>
        <h1>Principais</h1>
        {filterRestaurantsByCategory.map((product: any) => (
          <li key={product.id}>
            <img src={product.photoUrl} />
            <div>
              <p>{product.name}</p>
              <span>{product.description}</span>
              <footer>
              <strong>R$ {product.price}</strong>
              <button>Adicionar</button>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Restaurant;
