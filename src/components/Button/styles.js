import { StyleSheet } from 'react-native';

import { font } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  linearGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 44,
    borderRadius: 22,
  },
  text: {
    fontSize: 14,
    fontFamily: font.primary.bold,
    color: 'white',
  },
});

export default styles;
