// import { StatusBar } from 'expo-status-bar';
// import { useDeviceOrientation} from '@react-native-community/hooks';
import React from 'react';
import { StyleSheet, 
  Platform, 
  StatusBar, 
  View } from 'react-native';

  export default function App() {
  console.log('App executing, yes baby');


  return (
    <View style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "white",
      flex: 1,
      flexDirection: 'row',
      justifyContent: "center", //main acess
      alignItems: "center",
      alignContent: "center",
      // flexWrap: "wrap"
    }}>
    <View style={{
      backgroundColor:"dodgerblue",
      width: 100,
      height: 100,
      // flex: 2
    }}/>
    <View style={{
      backgroundColor:"gold",
      height: 100,
      width: 100,
      top: 20,
      left: 20,
      position: "absolute",

    }}/>
    <View style={{
      backgroundColor:"tomato",
      height: 100,
      width: 100,
      // flex: 1
    }}/>

    </View>
  );
}

const styles = StyleSheet.create({
  basetext : {
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
