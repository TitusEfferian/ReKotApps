import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import LandingPage from './LandingPage';
import Register from './Register';

const Stack = createStackNavigator();

const landingPageOptions = {
  header: () => null,
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        {/* <Stack.Screen name="Home">{() => <Home />}</Stack.Screen> */}
        <Stack.Screen options={landingPageOptions} name="Home">
          {() => <LandingPage />}
        </Stack.Screen>
        <Stack.Screen name="Register">{() => <Register />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
