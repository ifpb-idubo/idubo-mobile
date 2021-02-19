import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

import Routes from '~/routes';

Sentry.init({
  dsn: Config.SENTRY_DSN,
});

const App = () => (
  <NavigationContainer>
    <Routes />
  </NavigationContainer>
);

export default App;
