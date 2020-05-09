import React, {memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Logo from './components/Logo';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <Logo />
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
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Register);
