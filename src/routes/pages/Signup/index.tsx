
import React, { useRef } from 'react';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../../../components/Header';
import Input from '../../../container/Input/input';
import { dataForm, InputSignup } from '../../../models/dataForm';
import { UserSignup } from '../../../models/userAction';
import { signup } from '../../../store/modules/UserStore/actions';
import { useHistory} from 'react-router-dom'

import { Container, Form } from './styles';
import Logo from '../../../assets/logo-future-eats-invert.svg';


const Signup: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (data: UserSignup): Promise<void> => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'No mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(
        signup({
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          password: data.password,
        }, history)
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
      <Header />
      <img src={Logo} alt="Logo Ifuture" />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Cadastrar</h1>
        {dataForm.map((input: any) => (
          <Input
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
};

export default Signup;
