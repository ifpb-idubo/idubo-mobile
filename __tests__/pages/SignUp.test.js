import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { SignUp } from '~/pages';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockedGoBack,
  }),
}));

const Component = () => (
  <PaperProvider>
    <SignUp />
  </PaperProvider>
);

describe('SignUp page', () => {
  it('render all components', () => {
    const { getAllByTestId, getAllByText, getByText } = render(<Component />);

    expect(getAllByTestId('input')).toHaveLength(8);
    expect(getAllByText('E-mail')).toHaveLength(2);
    expect(getAllByText('Senha')).toHaveLength(2);
    expect(getAllByText('Razão social')).toHaveLength(2);
    expect(getAllByText('Nome fantasia')).toHaveLength(2);
    expect(getAllByText('Cidade')).toHaveLength(2);
    expect(getAllByText('Bairro')).toHaveLength(2);
    expect(getAllByText('Celular')).toHaveLength(2);
    expect(getAllByText('CNPJ')).toHaveLength(2);
    expect(getByText('CADASTRAR')).toBeTruthy();
    expect(getByText('FAZER LOGIN')).toBeTruthy();
  });

  it('navigate to register page', async () => {
    const { getByText } = render(<Component />);

    await act(async () => {
      await fireEvent.press(getByText('FAZER LOGIN'));
    });

    expect(mockedGoBack).toHaveBeenCalledTimes(1);
    expect(mockedGoBack).toHaveBeenCalled();
  });
});
