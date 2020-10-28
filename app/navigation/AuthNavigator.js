import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { View, Text } from 'react-native';
import Screen from '../components/Screen';

const Stack = createStackNavigator();

const AuthNavigator = ({navigation}) => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen options={{headerTitleStyle: {alignSelf: "center"}}} 
      name="Welcome" component={WelcomeScreen}/>
    <Stack.Screen options={{headerTitleStyle: {alignSelf: "center"}}}
    name="Login" component={LoginScreen}/>
    <Stack.Screen name="Register" component={Screen}/>
  </Stack.Navigator>
);  

export default AuthNavigator;