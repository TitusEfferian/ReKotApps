import React, {memo} from 'react';
import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from './components/Logo';
import Title from './components/Title';
import Button from './components/Button';
import Footer from './components/Footer';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.backgroundLogin}>
      <View style={style.container}>
        <Logo />
        <Title />
        <Button text="Login" type="login" marginTop={119} />
        <Button text="Daftar" type="daftar" marginTop={30} />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
});

export default memo(Login);
