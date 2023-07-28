import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';

export default function TabBar({state, descriptors, navigation, tabOptions}) {
  const handleTabPress = index => {
    const {name, key} = state.routes[index];
    navigation.navigate(name, {key});
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: '10%',
        backgroundColor: 'white',
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
      }}>
      {state.routes.map((route, index) => {
        const tabOption = tabOptions[index];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => handleTabPress(index)}>
            <Image
              source={tabOption.icon}
              style={{
                width: 20,
                height: 20,
                tintColor: isFocused ? 'black' : 'gray',
              }}
            />

            {isFocused ? (
              <Text style={{color: isFocused ? 'black' : 'gray'}}>
                {tabOption.name}
              </Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
