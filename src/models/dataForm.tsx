export const dataForm: any = [
  {
    name: 'name',
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

export interface InpuSignup {
  name: string;
  type: string;
  placeholder: string;
}
