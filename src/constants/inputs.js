const typesProps = {
  email: {
    autoCompleteType: 'email',
    textContentType: 'emailAddress',
    keyboardType: 'email-address',
  },
  password: {
    autoCompleteType: 'password',
    secureTextEntry: true,
    textContentType: 'password',
  },
};

const login = [
  {
    name: 'email',
    type: 'EMAIL',
    value: '',
    props: {
      label: 'E-mail',
      ...typesProps.email,
    },
  },
  {
    name: 'password',
    type: 'PASSWORD',
    value: '',
    props: {
      label: 'Senha',
      ...typesProps.password,
    },
  },
];

const register = [
  {
    name: 'email',
    type: 'EMAIL',
    value: '',
    props: {
      label: 'E-mail',
      ...typesProps.email,
    },
  },
  {
    name: 'password',
    type: 'PASSWORD',
    value: '',
    props: {
      label: 'Senha',
      ...typesProps.password,
    },
  },
  {
    name: 'company',
    type: 'TEXT',
    value: '',
    props: {
      label: 'Razão social',
    },
  },
  {
    name: 'companyName',
    type: 'TEXT',
    value: '',
    props: {
      label: 'Nome fantasia',
    },
  },
  {
    name: 'city',
    type: 'TEXT',
    value: '',
    props: {
      label: 'Cidade',
    },
  },
  {
    name: 'district',
    type: 'TEXT',
    value: '',
    props: {
      label: 'Bairro',
    },
  },
  {
    name: 'phone',
    type: 'PHONE',
    value: '',
    props: {
      label: 'Celular',
    },
  },
  {
    name: 'cnpj',
    type: 'CNPJ',
    value: '',
    props: {
      label: 'CNPJ',
    },
  },
];

const trashCan = [
  {
    name: 'ssid',
    type: 'TEXT',
    value: '',
    props: {
      label: 'Nome da rede',
    },
  },
  {
    name: 'password',
    type: 'PASSWORD',
    value: '',
    props: {
      label: 'Senha da rede',
      ...typesProps.password,
    },
  },
];

export { login, register, trashCan };
