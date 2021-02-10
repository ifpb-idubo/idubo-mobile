/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_500Medium,
  Montserrat_300Light,
  Montserrat_100Thin,
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from '~/theme/paper';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_300Light,
    Montserrat_100Thin,
  });

  useEffect(() => {
    async function keepSplash() {
      await SplashScreen.preventAutoHideAsync();
    }

    keepSplash();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthRoutes />
    </PaperProvider>
  );
};

export default Routes;
