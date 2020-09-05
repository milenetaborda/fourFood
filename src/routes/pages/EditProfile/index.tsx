/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Container, Form } from './styles';
import { UserUpdateForm } from '../../../models/userAction';
import Header from '../../../components/Header';

const EditProfile: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (data: UserUpdateForm): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        cpf: Yup.string().required('O CPF é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessage: any = {};

        err.inner.forEach(error => {
          errorMessage[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessage);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Editar</h1>
        <Header />
        <input name="name" type="text" placeholder="Nome e sobrenome" />
        <input name="email" type="email" placeholder="email@email.com" />
        <input name="cpf" type="text" placeholder="000.000.000-00" />
        <button type="submit">Editar</button>
      </Form>
    </Container>
  );
};

export default EditProfile;
