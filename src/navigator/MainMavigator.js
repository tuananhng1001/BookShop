import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { AuthNavigator } from './AuthNavigator';
import { HomeBottomNavigation } from './HomeNavigator';
import { SettingNavigator } from './SettingNavigator';
import { Constants } from '../constant/Constant';
import { getValueFromStorage } from '../until/Storage';
import ProductDetailScreen from '../screen/detail/ProductDetailScreen';
import AuthorDetailScreen from '../screen/detail/AuthorDetailScreen';
import PublishingDetailScreen from '../screen/detail/PublishingDetailScreen';
import { OrderNavigator } from './OrderNavigation';
import CheckoutScreen from '../screen/order/CheckoutScreen';

const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  const [initialRouteName, setInitRouteName] = useState('');
  getValueFromStorage(Constants.TOKEN).then(value => {
    console.log(value);
    if (value == '' || value == null) {
      setInitRouteName('Author');
    } else {
      setInitRouteName('HomePage');
    }
  });

  if (initialRouteName == '') {
    return null;
  } else {
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Author" component={AuthNavigator} />
        <Stack.Screen name="HomePage" component={HomeBottomNavigation} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="AuthorDetail" component={AuthorDetailScreen} />
        <Stack.Screen
          name="PublishingDetail"
          component={PublishingDetailScreen}
        />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Order" component={OrderNavigator} />
        <Stack.Screen name="Setting" component={SettingNavigator} />
      </Stack.Navigator>
    );
  }
};
