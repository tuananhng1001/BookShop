import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screen/home/SearchScreen';
import WishlistScreen from '../screen/home/WishlistScreen';
import CartScreen from '../screen/home/CartScreen';
import HomeScreen from '../screen/home/HomeScreen';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const options = [
  {
    name: 'Home',
    icon: require('../assets/ic_home.png'),
    targetScreen: 'HomeScreen',
  },
  {
    name: 'Search',
    icon: require('../assets/ic_search.png'),
    targetScreen: 'SearchScreen',
  },
  {
    name: 'Wishlist',
    icon: require('../assets/ic_wishlist.png'),
    targetScreen: 'WishlistScreen',
  },
  {
    name: 'Cart',
    icon: require('../assets/ic_cart.png'),
    targetScreen: 'CartScreen',
  },
];

export const HomeBottomNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} tabOptions={options} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};
