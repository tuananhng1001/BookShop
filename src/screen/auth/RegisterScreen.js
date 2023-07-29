import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import AppBar from '../../components/AppBar';
import { textStyle } from '../style/TextStyle';
import { screenStyle } from '../style/ScreenStyle';
import { Color } from '../style/Color';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = () => {
      
  };
  return (
    <View style={screenStyle.container}>
      <AppBar navigation={navigation} />
      <Text style={[textStyle.textTitle30, {marginTop: 48}]}>
        Hello! Register to get started
      </Text>
      <TextInput
        placeholderTextColor={Color.primary}
        style={[style.textInput, {marginTop: '15%'}]}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholderTextColor={Color.primary}
        style={style.textInput}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholderTextColor={Color.primary}
        style={style.textInput}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <TextInput
        placeholderTextColor={Color.primary}
        style={style.textInput}
        placeholder="Confirm password"
        onChangeText={text => setConfirm(text)}
        value={confirm}
      />

      <TouchableHighlight
        style={style.buttonLogin}
        onPress={() => {
          handleRegister();
        }}>
        <Text style={[textStyle.textContent16, {color: Color.white}]}>
          Login
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const style = StyleSheet.create({
  textTitle: {
    marginTop: '25%',
    marginEnd: '10%',
    marginBottom: 32,
  },
  inputContainer: {
    height: 56,
    flexDirection: 'row',
    backgroundColor: Color.white,
    borderColor: Color.gray,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    height: 56,
    backgroundColor: Color.white,
    borderColor: Color.gray,
    borderWidth: 1,
    paddingStart: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonLogin: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 10,
    marginTop: '10%',
  },
});
export default RegisterScreen;
