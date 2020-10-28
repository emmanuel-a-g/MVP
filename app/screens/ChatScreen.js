import React from 'react';
import { Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors.js';

function ChatScreen(props) {
  return (
    <View style={styles.container}>

    <View style={styles.closeIcon}><MaterialCommunityIcons 
    name="close" color="white" size={35}/></View>

    <View style={styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline"
    color="white" size={35}/></View>

    <Image style={styles.chat} resizeMode="contain"
    source={require('../assets/chatBackground.jpg')}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 20,
    left: 30,
  },
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black,
    flex: 1,
  },
  chat : {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 20,
    right: 30,

  }
})

export default ChatScreen;