import { StyleSheet } from 'react-native';

import { colors, metrics, font } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.pagePadding,
  },
  addressContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    width: '85%',
    height: 50,
    borderBottomRightRadius: 40,
    padding: 10,
    paddingRight: 15,
  },
  addressText: {
    maxWidth: '85%',
    fontSize: 14,
    color: colors.white,
    fontFamily: font.primary.bold,
  },
  contentContainer: {
    marginTop: 50,
    width: '100%',
  },
  searchContainer: {
    height: 50,
    width: '100%',
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    width: '80%',
    fontFamily: font.primary.regular,
    color: colors.black,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

  chipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardChip: {
    marginRight: 25,
  },
  pickTime: {
    fontFamily: font.primary.regular,
    color: colors.black,
    marginVertical: 15,
  },
  basket: {
    fontFamily: font.primary.bold,
    fontSize: 18,
    color: colors.primary,
  },
  date: {
    fontFamily: font.primary.bold,
    fontSize: 14,
    color: colors.black,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default styles;
