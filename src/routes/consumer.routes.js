import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { Feather } from '@expo/vector-icons';

import { ConnectTrashCan, ConsumerHome, ConsumerProfile } from '~/pages';
import { colors, font } from '~/theme/constants';

const AppStack = createStackNavigator();
const AppTabs = createMaterialTopTabNavigator();

const AppRoutes = () => {
  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }

    hideSplash();
  }, []);

  function TabScreens() {
    return (
      <AppTabs.Navigator
        initialRouteName="ConsumerHome"
        backBehaviour="initialRoute"
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: colors.primary,
          labelStyle: {
            fontFamily: font.primary.bold,
          },
          indicatorStyle: {
            backgroundColor: colors.primary,
          },
          style: {
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          },
        }}
      >
        <AppTabs.Screen
          name="ConsumerHome"
          component={ConsumerHome}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={24} />
            ),
          }}
        />
        <AppTabs.Screen
          name="ConsumerProfile"
          component={ConsumerProfile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <Feather name="user" color={color} size={24} />
            ),
          }}
        />
      </AppTabs.Navigator>
    );
  }

  return (
    <AppStack.Navigator initialRoute="TabScreens" headerMode="none">
      <AppStack.Screen name="TabScreens" component={TabScreens} />
      <AppStack.Screen name="ConnectTrashCan" component={ConnectTrashCan} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
