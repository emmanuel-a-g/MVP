import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';

import Screen from '../components/Screen';
import AppButton from './AppButton';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Screen style={styles.container}>
    <Image 
    style={styles.logo}
    source={require('../assets/myLogo.png')}/>
    <AppTextInput 
    autoCapitilize="none"
    autoCorrect={false}
    icon="email"
    multiline={false}
    keyboardType="email-address"
    placeholder="Email"
    onChangeText={(text) => setEmail(text)}
    />
    <AppTextInput 
    autoCapitilize="none"
    autoCorrect={false}
    icon="lock"
    placeholder="Password"
    multiline={false}
    secureTextEntry={true}
    onChangeText={(text) => setPassword(text)}
    />
    <AppButton title="Login" color="blue" onPressing={() => {console.log(email, password)}}/>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80, 
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  }
})

export default LoginScreen;