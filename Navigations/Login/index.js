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

  const handleOnChange = useCallback(e => {
    setIsChecked(e);
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
          <TextInput label="E-mail" marginTop={72} />
          <TextInput label="Kata Sandi" marginTop={20} isPassword />
          <AutoLogin isChecked={isChecked} handleOnChange={handleOnChange} />
          <Button />
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
