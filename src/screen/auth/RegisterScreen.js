import { View, Text, Button, Alert } from 'react-native';

const RegisterScreen = ({navigation}) => {
  Alert.prompt('ahhihi', 'Ahihihi', text => console.log(text));
  return (
    <View>
      <Text>RegisterScreen</Text>
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

export default RegisterScreen;
