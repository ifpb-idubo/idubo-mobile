import { StyleSheet } from 'react-native';

import { colors, metrics, font } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    justifyContent: 'center',
    padding: metrics.pagePadding,
  },
  loginContainer: {
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
