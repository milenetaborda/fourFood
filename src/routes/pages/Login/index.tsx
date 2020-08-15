import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Container, Form } from './styles';
import { useHistory } from 'react-router-dom';
import Input from '../../../container/Input/input';
import Logo from '../../../assets/logo-future-eats-invert.svg';
import { UserSignup } from '../../../models/userAction';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/modules/UserStore/actions';

const Login: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<any>(null);
  const dispatch = useDispatch();

  const goToSignup = () => {
    history.replace("/signup");
  }

  const handleSubmit = async (data: UserSignup): Promise<void> => {
    try{
      const schema = Yup.object().shape({
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
        login({
          email: data.email,
          password: data.password
        }, history)
      )

      formRef.current.setErrors({});

    }catch(err) {
      if(err instanceof Yup.ValidationError) {
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
      <img src={Logo} alt="Logo Ifuture" />

      <Form onSubmit={handleSubmit} ref={formRef}>
        <h1>Entrar</h1>
        <Input type="text" placeholder="email@email.com" name="email" />
        <Input type="password" placeholder="Mínimo 6 caracteres" name="password" />
        <button type="submit">Entrar</button>
      </Form>
      <span>
        Não possui cadastro?
      <strong onClick={goToSignup}>Clique aqui</strong>
      </span>
    </Container>
  );
};

export default Login;
