import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Button } from '~/components';

describe('Button component', () => {
  const label = 'Test button';

  it('renders label', () => {
    const onPress = jest.fn();
    const { queryByText } = render(<Button label={label} onPress={onPress} />);

    expect(queryByText(label)).toBeTruthy();
  });

  it('is clickable', () => {
    const onPress = jest.fn();
    const { queryByText } = render(
      <Button label={label} onPress={onPress} enabled />
    );

    const button = queryByText(label);

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });

  it('is disabled', () => {
    const onPress = jest.fn();
    const { queryByText } = render(<Button label={label} onPress={onPress} />);

    fireEvent.press(queryByText(label));

    expect(queryByText(label)).toBeDisabled();
    expect(onPress).not.toHaveBeenCalled();
  });
});
