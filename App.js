import React from 'react';
import { 
  StyleSheet, 
  Platform,
  StatusBar, 
  View } 
from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import ChatScreen from './app/screens/ChatScreen.js';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import AppButton from './app/screens/AppButton.js';

  export default function App() {
  console.log('App running sucessfully...');

  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  }
});
