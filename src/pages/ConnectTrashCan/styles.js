import { StyleSheet } from 'react-native';

import { colors, metrics, font } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  instructionsContainer: {
    backgroundColor: colors.white,
    padding: metrics.pagePadding - 10,
    margin: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontFamily: font.primary.regular,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  contentContainer: {
    padding: metrics.pagePadding - 10,
    paddingTop: metrics.pagePadding,
    margin: 10,
    backgroundColor: colors.white,
  },
  formTitle: {
    fontFamily: font.primary.regular,
    fontSize: 16,
  },
  error: {
    fontFamily: font.primary.regular,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
