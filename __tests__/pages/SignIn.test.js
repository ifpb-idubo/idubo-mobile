import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { SignIn } from '~/pages';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

const Component = () => (
  <PaperProvider>
    <SignIn />
  </PaperProvider>
);

describe('SignIn page', () => {
  it('render all components', () => {
    const { getAllByTestId, getAllByText, getByText } = render(<Component />);

    expect(getAllByTestId('input')).toHaveLength(2);
    expect(getAllByText('E-mail')).toHaveLength(2);
    expect(getAllByText('Senha')).toHaveLength(2);
    expect(getByText('ENTRAR')).toBeTruthy();
    expect(getByText('CADASTRE-SE')).toBeTruthy();
  });

  it('navigate to register page', async () => {
    const { getByText } = render(<Component />);

    await act(async () => {
      await fireEvent.press(getByText('CADASTRE-SE'));
    });

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('SignUp');
  });
});
