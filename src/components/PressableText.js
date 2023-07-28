import React from 'react';
import {Pressable, Text} from 'react-native';

export const PressableText = ({text, onPress, style}) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}>
      <Text style={style}>{text}</Text>
    </Pressable>
  );
};
