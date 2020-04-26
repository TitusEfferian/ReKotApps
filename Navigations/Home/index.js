import React, {memo} from 'react';
import {View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>this is home</Text>
    </View>
  );
};

export default Home;
