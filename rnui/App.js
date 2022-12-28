
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RnUIStackRouters from './src/navigation/stackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <RnUIStackRouters />
    </NavigationContainer>
  );
};

export default App;
