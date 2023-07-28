import React from 'react';
import { Button, SafeAreaView } from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
