import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import OnboardingScreen from '../screen/auth/OnboardingScreen';
import RegisterScreen from '../screen/auth/RegisterScreen';
import FogotPasswordScreen from '../screen/auth/FogotPasswordScreen';
import LoginScreen from '../screen/auth/LoginScreen';
import { HomeBottomNavigation } from './HomeNavigator';
import { getValueFromStorage } from '../until/Storage';
import { Constants } from '../constant/Constant';

const Stack = createNativeStackNavigator();
export const AuthNavigator = () => {
  const [initialRouteName, setInitRouteName] = useState('');
  getValueFromStorage(Constants.IS_FIRST_USED).then(value => {
    console.log(value);
    if (value) {
      setInitRouteName('Login');
    } else {
      setInitRouteName('Onboaring');
    }
  });

  if (initialRouteName == '') {
    return null;
  } else {
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboaring" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="ForgotPassword" component={FogotPasswordScreen} />
        <Stack.Screen name="Main" component={HomeBottomNavigation} />
      </Stack.Navigator>
    );
  }
};
