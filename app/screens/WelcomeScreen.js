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

 import AppButton from './AppButton';

function WelcomeScreen(props) {
  console.log('then.. getting to Welcome Screen');

  return (
    <ImageBackground
    blurRadius={3}
    style={styles.background}
    source={require('../assets/seasonBackground.jpg')}>

    <View style={styles.topContainer}>
    <Image style={styles.logo} source={require('../assets/myLogo.png')}/>
    <Text style={styles.tagLine}>Start sharing your stories!</Text>
    </View>

    <View style={styles.account}>
    <AppButton title="Login" onTouch={() => console.log('I was logged in')} color={'black'}/>
    <AppButton title="Register" onTouch={() => console.log('I was logged in')} color={'orange'}/>
    </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  account : {
    width: '100%',
    padding: 20,
  },
  background: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25, 
    fontWeight: "600",
    paddingVertical: 10,
  },
  topContainer : {
    position: "absolute",
    top: 85,
    alignItems: "center",
  }
})


export default WelcomeScreen;