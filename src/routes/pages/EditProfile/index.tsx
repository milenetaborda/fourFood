/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Container, Form } from './styles';
import { UserUpdateForm } from '../../../models/userAction';
import Header from '../../../components/Header';
import Input from '../../../container/Input/input';
import { updateProfile } from '../../../store/modules/UserStore/actions';

const EditProfile: React.FC = () => {
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

      dispatch(
        updateProfile({
          name: data.name,
          email: data.email,
          cpf: data.cpf,
        }),
      );

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages: any = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  };

  return (
    <Container>
      <h1>Editar</h1>
      <Header />
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="name" type="text" placeholder="Nome e sobrenome" />
        <Input name="email" type="email" placeholder="email@email.com" />
        <Input name="cpf" type="text" placeholder="000.000.000-00" />
        <button type="submit">Editar</button>
      </Form>
    </Container>
  );
};

export default EditProfile;
