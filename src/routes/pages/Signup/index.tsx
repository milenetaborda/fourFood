import React, { FormEvent, useState } from 'react';

import { Container, Form } from './styles';
import Header from '../../../components/Header';

import Logo from '../../../assets/logo-future-eats-invert.svg';

const dataForm: InpuSignup[] = [
  {
    name: 'username',
    type: 'text',
    label: 'Nome',
    placeholder: 'Nome e sobrenome',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'email@email.com',
  },
  {
    name: 'cpf',
    type: 'text',
    label: 'CPF',
    placeholder: '000.000.000-00',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Senha',
    placeholder: 'Mínimo 6 caracteres',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirmar',
    placeholder: 'Confirme a senha anterior',
  },
];

const Signup: React.FC = () => {
  // const { newName, setName } = useState([]);

  function handleInputChange(event: FormEvent<any>): void {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(dataForm);
  }

  return (
    <Container>
      <Header />
      <img src={Logo} alt="Logo Ifuture" />

      <Form onSubmit={handleInputChange}>
        <h1>Cadastrar</h1>
        {dataForm.map(input => (
          <input
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value=""
          />
        ))}
        <button type="submit">Criar</button>
      </Form>
    </Container>
  );
};

export default Signup;

interface InpuSignup {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}
