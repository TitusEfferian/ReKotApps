import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import LandingPage from './LandingPage';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
        <Stack.Screen name="LandingPage">{() => <LandingPage />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
