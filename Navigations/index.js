import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import GlobalContextProvider from '../context';
import ScanTutorial from './ScanTutorial';

const Stack = createStackNavigator();

const landingPageOptions = {
  header: () => null,
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen options={landingPageOptions} name="Home">
            {() => <LandingPage />}
          </Stack.Screen>
          <Stack.Screen name="Register">{() => <Register />}</Stack.Screen>
          <Stack.Screen name="Login">{() => <Login />}</Stack.Screen>
          <Stack.Screen name="How To Scan">
            {() => <ScanTutorial />}
          </Stack.Screen>
        </Stack.Navigator>
      </GlobalContextProvider>
    </NavigationContainer>
  );
};

export default MyStack;
