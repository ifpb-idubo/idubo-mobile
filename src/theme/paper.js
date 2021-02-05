import { DefaultTheme, configureFonts } from 'react-native-paper';
import { colors, font } from '~/theme/constants';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    background: colors.background,
    placeholder: colors.placeholder,
  },
  fonts: configureFonts({
    ios: {
      regular: {
        fontFamily: font.primary.regular,
      },
      medium: {
        fontFamily: font.primary.medium,
      },
      light: {
        fontFamily: font.primary.light,
      },
      thin: {
        fontFamily: font.primary.thin,
      },
    },
    android: {
      regular: {
        fontFamily: font.primary.regular,
      },
      medium: {
        fontFamily: font.primary.medium,
      },
      light: {
        fontFamily: font.primary.light,
      },
      thin: {
        fontFamily: font.primary.thin,
      },
    },
  }),
};

export default theme;
