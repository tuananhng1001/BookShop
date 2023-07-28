import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

export default HomeScreen;
