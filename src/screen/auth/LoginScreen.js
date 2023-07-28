import { React, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { screenStyle } from '../style/ScreenStyle';
import { textStyle } from '../style/TextStyle';
import { Color } from '../style/Color';
import { PressableText } from '../../components/PressableText';
import { legacy_createStore as createStore } from 'redux';
import { Constants } from '../../constant/Constant';
import { getValueFromStorage } from '../../until/Storage';
import { useSelector } from 'react-redux';
import { Provider, useDispatch } from 'react-redux/es/exports';
import loginReducer, { loginWork } from '../../reducer/AuthReduce';
const reduxStore = createStore(loginReducer);
const LoginScreen = ({navigation}) => {
  return (
    <Provider store={reduxStore}>
      <Login navigation={navigation} />
    </Provider>
  );
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHide, setShowPass] = useState(true);
  const dispatch = useDispatch();

  useSelector(state => {
    console.log(state.isAuthenticated);
    if (state.isAuthenticated) {
      navigation.navigate('Main');
    }
  });

  const [curentEmail, setCurentEmail] = useState('');
  getValueFromStorage(Constants.EMAIL).then(value => {
    setCurentEmail(value);
  });
  console.log(curentEmail);

  const handleLogin = () => {
    loginWork(email, password, dispatch);
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <Text style={[textStyle.textTitle30, style.textTitle]}>
        Welcome back! Glad to see you, Again!
      </Text>

      <TextInput
        placeholderTextColor={Color.primary}
        style={style.textInput}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        value={curentEmail}
      />

      <View style={style.inputContainer}>
        <TextInput
          placeholderTextColor={Color.primary}
          placeholder="Enter your password"
          secureTextEntry={isHide}
          style={{
            flex: 1,
            paddingStart: 20,
          }}
          onChangeText={text => setPassword(text)}
        />
        {isHide == true ? (
          <Pressable
            onPress={() => {
              setShowPass(false);
            }}>
            <Image
              style={style.showHideButton}
              source={require('../../assets/ic_show_pass.png')}
            />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setShowPass(true);
            }}>
            <Image
              style={style.showHideButton}
              source={require('../../assets/ic_hide_pass.png')}
            />
          </Pressable>
        )}
      </View>
      <PressableText
        text={'Forgot Password?'}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}
        style={[
          textStyle.textContent14,
          {color: Color.dark_gray, fontWeight: '600', alignSelf: 'flex-end'},
        ]}
      />
      <TouchableHighlight
        style={style.buttonLogin}
        onPress={() => {
          handleLogin();
        }}>
        <Text style={[textStyle.textContent16, {color: Color.white}]}>
          Login
        </Text>
      </TouchableHighlight>

      <View style={style.registerContainer}>
        <Text style={textStyle.textContent16}>Don't have an account?</Text>
        <PressableText
          style={[textStyle.textContentBold16, {color: Color.blue}]}
          text={' Register Now'}
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
      </View>
    </SafeAreaView>
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
  showHideButton: {
    height: 24,
    width: 24,
    resizeMode: 'center',
    marginEnd: 20,
  },
  buttonLogin: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    borderRadius: 10,
    marginTop: 30,
  },
  registerContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: '65%',
  },
});
export default LoginScreen;
