import { View, Text, Button, Alert } from 'react-native';

const FogotPasswordScreen = ({navigation}) => {
  return (
    <View>
      <Text>FogotPasswordScreen</Text>
      <Button
        title="Start"
        onPress={() => {
          navigation.navigate('Login', {
            userName: 'abc1324',
            password: '1162131',
          });
        }}
      />
    </View>
  );
};

export default FogotPasswordScreen;
