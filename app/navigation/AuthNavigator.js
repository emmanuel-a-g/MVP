import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { View, Text } from 'react-native';
import Screen from '../components/Screen';

const Stack = createStackNavigator();

const AuthNavigator = ({navigation, setLogin}) => (
  <Stack.Navigator initialRouteName="Welcome" mode="modal">

    <Stack.Screen options={{headerTitleStyle: {alignSelf: "center"}, headerShown: false}} 
    name="Welcome" component={WelcomeScreen} />

    <Stack.Screen name="Login" options={{ title: 'Login' }}> 
    {(props) => <LoginScreen {...props} setLogin={setLogin} />}
    </Stack.Screen>

    <Stack.Screen name="Register" component={Screen}/>

  </Stack.Navigator>
);  

export default AuthNavigator;