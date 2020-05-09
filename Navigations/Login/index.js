import React, {memo, useState, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Logo from './components/Logo';
import TextInput from '../../components/TextInput';
import AutoLogin from './components/AutoLogin';
import Button from './components/Button';
import DontHaveAccount from './components/DontHaveAccount';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);

  const handleOnChangePassword = useCallback(text => {
    setPassword(text);
  }, []);

  const handleOnChange = useCallback(e => {
    setIsChecked(e);
  }, []);

  const handleOnPress = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          style={styles.scrollViewContainer}>
          <Logo />
          <TextInput
            label="E-mail"
            marginTop={72}
            handleOnChange={handleOnChangeEmail}
          />
          <TextInput
            label="Kata Sandi"
            marginTop={20}
            isPassword
            handleOnChange={handleOnChangePassword}
          />
          <AutoLogin isChecked={isChecked} handleOnChange={handleOnChange} />
          <Button handleOnPress={handleOnPress} />
          <DontHaveAccount />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackgroundContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Login);
