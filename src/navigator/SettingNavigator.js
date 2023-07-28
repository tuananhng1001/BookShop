import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screen/profile/ProfileScreen';
import UpdateProfileScreen from '../screen/profile/UpdateProfileScreen';
import ChangePasswordScreen from '../screen/profile/ChangePasswordScreen';
import OrderInformationScreen from '../screen/order/OrderInformationScreen';
import MyOrderScreen from '../screen/order/OrderScreen';

const Stack = createNativeStackNavigator();
export const SettingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen
        name="OrderInformation"
        component={OrderInformationScreen}
      />
      <Stack.Screen name="My Order" component={MyOrderScreen} />
    </Stack.Navigator>
  );
};
