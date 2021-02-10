import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';

import { Loading } from '~/components';

describe('Loading component', () => {
  it('render top content', () => {
    const { getByTestId } = render(
      <Loading topContent={<View testID="top-content" />} />
    );

    expect(getByTestId('top-content')).toBeTruthy();
  });

  it('render bottom content', () => {
    const { getByTestId } = render(
      <Loading bottomContent={<View testID="bottom-content" />} />
    );

    expect(getByTestId('bottom-content')).toBeTruthy();
  });

  it('render top and bottom content', () => {
    const { getByTestId } = render(
      <Loading
        topContent={<View testID="top-content" />}
        bottomContent={<View testID="bottom-content" />}
      />
    );

    expect(getByTestId('top-content')).toBeTruthy();
    expect(getByTestId('bottom-content')).toBeTruthy();
  });
});
