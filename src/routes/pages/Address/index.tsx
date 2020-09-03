import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Form } from './styles';
import Header from '../../../components/Header';
import Input from '../../../container/Input/input';
import { UserAddress } from '../../../models/userAction';
import { addAddress } from '../../../store/modules/UserStore/actions';

const Address: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const formRef = useRef<any>(null);

  const handleSubmit = async (data: UserAddress): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        street: Yup.string().required('O lagradouro é orbigatório'),
        number: Yup.string().required('O número é obrigatório'),
        neighbourhood: Yup.string().required('O bairro é obrigatório'),
        city: Yup.string().required('A cidade é obrigatório'),
        state: Yup.string().required('O Estado é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(addAddress(data, history));

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
      <Header />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Meu endereço</h1>
        <Input type="text" placeholder="Rua / Av." name="street" />
        <Input type="text" placeholder="Número" name="number" />
        <Input type="text" placeholder="Apto. / Bloco" name="complement" />
        <Input type="text" placeholder="Bairro" name="neighbourhood" />
        <Input type="text" placeholder="Cidade" name="city" />
        <Input type="text" placeholder="Estado" name="state" />
        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
};

export default Address;
