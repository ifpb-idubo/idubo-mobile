import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

import { AuthProvider } from '~/contexts/auth';
import { AlertsProvider } from '~/contexts/alerts';
import Routes from '~/routes';

Sentry.init({
  dsn: Config.SENTRY_DSN,
});

const App = () => (
  <NavigationContainer>
    <AlertsProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AlertsProvider>
  </NavigationContainer>
);

export default App;
