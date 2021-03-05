import { StyleSheet } from 'react-native';

import { colors, font, lightShadow } from '~/theme/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.modalBackground,
    padding: 32,
  },
  centeredView: {
    width: '100%',
    minHeight: 150,
    padding: 16,
    paddingBottom: 6,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    ...lightShadow,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: font.primary.bold,
    color: colors.black,
  },
  modalDescriptionContainer: {
    margin: 16,
    justifyContent: 'center',
  },
  modalDescription: {
    fontSize: 18,
    fontFamily: font.primary.bold,
    color: colors.black,
    textAlign: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '49%',
  },
});

export default styles;
