import React from 'react';

//context
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

//safearea
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigationRef';

import { Navigation } from './src/navigation';

function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthProvider>
    </LocationProvider>
  );
}

export default App;
