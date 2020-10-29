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
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  const [login, loginSet] = useState(false); //set to false right now
  const [user, setUser] = useState('');
  const [count, setCount ] = useState(0);

  const setLogin = ({user}) => {
    if (!login) {
      loginSet(true);
      setUser(user);
    } else {
      loginSet(false);
    }
  }
  const returnCount = (count) => {
    setCount(count);
  }

  return (
    <NavigationContainer theme={navigationTheme}>

      {login === false ? <AuthNavigator setLogin={setLogin}/> : <AppNavigator user={user} 
      setLogin={setLogin} count={count} returnCount={returnCount}/>}

    </NavigationContainer>
  );
}