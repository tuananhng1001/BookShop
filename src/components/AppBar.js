import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
export default function AppBar({isCanBack, title, navigation}) {
  return (
    <View style={style.container}>
      {isCanBack == false ? null : (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={style.iconBack}
            source={require('../assets/ic_arrow_left.png')}
          />
        </Pressable>
      )}
      {title === '' ? null : <Text style={style.titleText}>{title}</Text>}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
  },

  iconBack: {
    height: 34,
    width: 34,
  },

  titleText: {
    fontFamily: 'Mulish',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
});
