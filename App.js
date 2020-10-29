import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Button,
  View, 
  Image,
  Text} 
from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigator from './app/navigation/AppNavigator';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AccountScreen from './app/screens/AccountScreen';
import { set } from 'react-native-reanimated';
// <AuthNavigator/>
// <AppNavigator/>


export default function App() {
  const [login, loginSet] = useState(false);
  const [user, setUser] = useState('');
  console.log('App working');
  let setLogin = () => {
    if (!login) {
      loginSet(true);

    } else {
      loginSet(false);
    }
  }

  return (
    <NavigationContainer>

      {login === false ? <AuthNavigator setLogin={setLogin}/> : <AppNavigator setLogin={setLogin}/>}

    </NavigationContainer>
  );
}