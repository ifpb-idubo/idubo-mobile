import { StyleSheet } from 'react-native';

import { colors, font } from '~/theme/constants';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    marginTop: 10,
    padding: 15,
    borderRadius: 20,
    height: 150,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: font.primary.bold,
    fontSize: 16,
  },
  cardDistance: {
    fontFamily: font.primary.regular,
    fontSize: 14,
  },
  cardDescriptionContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  cardChipContainer: {
    flexDirection: 'row',
  },
  cardChip: {
    marginRight: 5,
  },
  cardFooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardPublishedDate: {
    fontFamily: font.primary.regular,
    fontSize: 14,
  },
  cardAddToCartButton: {
    backgroundColor: colors.primary,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAddToCartText: {
    fontFamily: font.primary.bold,
    color: colors.white,
    fontSize: 20,
    lineHeight: 25,
  },
});

export default styles;
