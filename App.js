import React, {useState} from 'react';
import { 
  StyleSheet, 
  Platform,
  StatusBar, 
  View } 
from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import LoginScreen from './app/screens/LoginScreen';

  export default function App() {
  console.log('App running sucessfully...');


  return (<LoginScreen />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  }
});
