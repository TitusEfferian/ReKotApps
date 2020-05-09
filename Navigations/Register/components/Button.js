import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';

const Button = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textColor}>Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 36,
  },
  buttonStyle: {
    width: 130,
    height: 30,
    backgroundColor: '#B32727',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
    fontSize: 16,
    lineHeight: 20,
  },
});

export default memo(Button);
