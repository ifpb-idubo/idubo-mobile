import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';

import { Input } from '~/components';

describe('Input component', () => {
  it('render label', () => {
    const { getAllByText } = render(
      <Input value="" onChangeText={() => {}} props={{ label: 'Test input' }} />
    );

    expect(getAllByText('Test input')).toHaveLength(2);
  });

  it('changes text', async () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(
      <Input
        value=""
        onChangeText={onChangeText}
        props={{ label: 'Test input' }}
      />
    );
    await act(async () => {
      await fireEvent.changeText(getByTestId('input'), 'testing input');
    });
    expect(onChangeText).toHaveBeenCalledWith('testing input');
  });
});
