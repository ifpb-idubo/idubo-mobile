import { StyleSheet } from 'react-native';

import { colors, metrics, font } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: metrics.pagePadding,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inactiveText: {
    fontSize: 14,
    fontFamily: font.primary.regular,
  },
  activeText: {
    fontSize: 14,
    fontFamily: font.primary.regular,
    color: colors.primary,
  },
});

export default styles;
