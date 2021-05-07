import { StyleSheet } from 'react-native';

import { font, colors, metrics } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.pagePadding,
  },
  title: {
    fontFamily: font.primary.bold,
    fontSize: 24,
    color: colors.black,
    marginBottom: 50,
  },
  menuButton: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.grayFinalGradient,
    paddingBottom: 10,
  },
  buttonText: {
    fontFamily: font.primary.bold,
    fontSize: 18,
    color: colors.primary,
    marginLeft: 10,
  },
});

export default styles;
