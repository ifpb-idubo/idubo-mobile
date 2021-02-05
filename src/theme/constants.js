import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  width,
  height,
  pagePadding: 20,
  pagePaddingTop: 40,
};

const font = {
  primary: {
    bold: 'Montserrat_700Bold',
    medium: 'Montserrat_500Medium',
    regular: 'Montserrat_400Regular',
    light: 'Montserrat_300Light',
    thin: 'Montserrat_100Thin',
  },
};

const colors = {
  primary: '#50B054',
  light: '#4FBF05',
  accent: '#2E1F01',
  background: '#FFFFFF',
  white: '#E0E0E0',
  black: '#151522',
  modalBackground: 'rgba(0, 0, 0, .6)',
  initialGradient: '#00C48C',
  finalGradient: '#2EFFC3',
  grayInitialGradient: '#666',
  grayFinalGradient: '#999',
  placeholder: '#C2C2C2',
};

const lightShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 5,
};

export { metrics, font, colors, lightShadow };
