import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';

import { ConnectTrashCan } from '~/pages';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }

    hideSplash();
  }, []);

  return (
    <AppStack.Navigator initialRoute="Tab" headerMode="none">
      <AppStack.Screen name="ConnectTrashCan" component={ConnectTrashCan} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
