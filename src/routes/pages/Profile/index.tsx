/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect } from 'react';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { Container } from './styles';
import { getProfile } from '../../../store/modules/UserProfile/actions';

const Profile: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToEditProfile = () => {
    history.replace('/profile/editProfile');
  };

  // const goToEditAddress = () => {
  //   history.replace('/');
  // };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const updatedProfile = useSelector((state: any) => state.user.updateProfile);

  return (
    <Container>
      <h1>Meu Perfil</h1>
      <Header />

      <div className="WrapperInfo">
        {updatedProfile?.map((element: any) => (
          <>
            <div>
              <main>
                <p>{element.name}</p>
                <p>{element.email}</p>
                <p>{element.cpf}</p>
              </main>
              <BsPencil onClick={goToEditProfile} />
            </div>
            <aside>
              <div>
                <span>Endereço cadastrado</span>
                <p>{element.address}</p>
              </div>
              <BsPencil />
            </aside>
          </>
        ))}

        <h2>Histórico de pedidos</h2>
        <hr />

        <p>Você não realizou nenhum pedido</p>
      </div>
    </Container>
  );
};

export default Profile;
