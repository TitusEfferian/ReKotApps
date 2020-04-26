import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from './components/Logo';
import Title from './components/Title';
import Button from './components/Button';
import Footer from './components/Footer';

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={style.backgroundLogin}>
      <ImageBackground
        style={style.container}
        imageStyle={style.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <Logo />
        <Title />
        <Button text="Login" type="login" marginTop={119} />
        <Button text="Daftar" type="daftar" marginTop={30} />
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundLogin: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Login);
