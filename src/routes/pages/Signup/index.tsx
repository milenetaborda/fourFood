/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Container, Form } from './styles';

import Header from '../../../components/Header';
import Input from '../../../container/Input/input';
import { dataForm, InpuSignup } from '../../../models/dataForm';

import Logo from '../../../assets/logo-future-eats-invert.svg';

const Signup: React.FC = () => {
  const formRef = useRef<any>(null);

  const handleSubmit = async (data: InpuSignup): Promise<void> => {
    try {
      // Não está retornando o erro do required
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

      console.log(data);
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
