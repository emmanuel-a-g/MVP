import React, {useState, useEffect} from 'react';
import { 
  StyleSheet,
  Button,
  View, 
  Image,
  Text} 
from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    );
}