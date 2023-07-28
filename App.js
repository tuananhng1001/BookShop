import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainNavigator } from './src/navigator/MainMavigator';
const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
