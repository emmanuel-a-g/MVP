import React from 'react';
import {
  Platform,
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
 } from 'react-native';

function WelcomeScreen(props) {
  console.log('then.. getting to Welcome Screen');

  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/seasonBackground.jpg')}>

    <View style={styles.topContainer}>
    <Image style={styles.logo} source={require('../assets/myLogo.png')}/>
    <Text>Start sharing your Stories!</Text>
    </View>

    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70, 
    backgroundColor: 'grey',
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: 'orange',
  },
  logo: {
    width: 100,
    height: 100,
  },
  topContainer : {
    position: "absolute",
    top: 85,
    alignItems: "center",
  }
})


export default WelcomeScreen;