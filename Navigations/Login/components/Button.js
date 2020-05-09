import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.textStyle}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 37,
    backgroundColor: '#B32727',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 36,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 20,
    color: 'white',
  },
});

export default memo(Button);
