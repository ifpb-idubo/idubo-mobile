/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import AuthRoutes from './auth.routes';

const Routes = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
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

  return <AuthRoutes />;
};

export default Routes;
