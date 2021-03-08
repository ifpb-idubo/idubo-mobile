import { StyleSheet } from 'react-native';

import { colors, font } from '~/theme/constants';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  title: {
    fontFamily: font.primary.bold,
    fontSize: 18,
    lineHeight: 21,
  },
});

export default styles;
