import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import { PressableText } from '../../components/PressableText';
import { setValueToStorage } from '../../until/Storage';
import { Constants } from '../../constant/Constant';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/img_onboarding.png')}>
        <Image
          style={{marginTop: '50%', marginBottom: '20%'}}
          source={require('../../assets/ic_logo.png')}></Image>
        <Text style={[styles.text, styles.textTitle]}>Book Store</Text>
        <Text style={[styles.text, styles.textDescription]}>
          Good books, like good friends, are few and chosen; the more select,
          the more enjoyable
        </Text>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            setValueToStorage(Constants.IS_FIRST_USED, 'false');
            navigation.navigate('Login');
          }}>
          <View>
            <PressableText
              style={[styles.text, {fontSize: 18, fontWeight: '500'}]}
              text={'Start'}
            />
          </View>
        </TouchableHighlight>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Mulish',
    textAlign: 'center',
  },
  textTitle: {
    fontSize: 35,
    lineHeight: 50,
    fontWeight: '600',
  },
  textDescription: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '300',
    marginHorizontal: 45,
    marginTop: 20,
  },
  button: {
    height: 68,
    width: '60%',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardingScreen;
