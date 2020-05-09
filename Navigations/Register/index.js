import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import Logo from './components/Logo';
import TextInput from '../../components/TextInput';
import Button from './components/Button';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackgroundContainer}
        imageStyle={styles.imageStyle}
        source={require('../assets/BackgroundAngkot.png')}>
        <Logo />
        <TextInput marginTop={62} label="Nama (Sesuai dengan KTP)" />
        <TextInput marginTop={8} label="Nomor Induk Kependudukan" />
        <TextInput marginTop={8} label="Email" />
        <TextInput marginTop={8} label="Kata Sandi" />
        <Button />
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
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.4,
  },
});

export default memo(Register);
