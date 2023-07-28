import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OrderInformationScreen from '../screen/order/OrderInformationScreen';
import OrderScreen from '../screen/order/OrderScreen';
import OrderDetailScreen from '../screen/order/OrderDetail';

const Stack = createNativeStackNavigator();
export const OrderNavigator = ({routeName}) => {
  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      <Stack.Screen
        name="OrderInformation"
        component={OrderInformationScreen}
      />
    </Stack.Navigator>
  );
};
