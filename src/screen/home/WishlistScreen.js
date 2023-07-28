import { View, Text, Button } from 'react-native';
import React from 'react';

const WishlistScreen = ({navigation}) => {
  return (
    <View>
      <Text>WishlistScreen</Text>
      <Button
        title="Setting"
        onPress={() => {
          navigation.navigate('Setting');
        }}
      />
    </View>
  );
};

export default WishlistScreen;
