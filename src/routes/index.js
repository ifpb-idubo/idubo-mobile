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

import { useAuth } from '~/contexts/auth';
import theme from '~/theme/paper';

import AuthRoutes from './auth.routes';
import ConsumerRoutes from './consumer.routes';

const Routes = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_500Medium,
    Montserrat_300Light,
    Montserrat_100Thin,
  });
  const { signed } = useAuth();

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
      {signed ? <ConsumerRoutes /> : <AuthRoutes />}
    </PaperProvider>
  );
};

export default Routes;
